import { Amplify } from 'aws-amplify';
import * as Auth from 'aws-amplify/auth';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useQueryClient } from '@tanstack/react-query';

import { sleep, useGlobalStore } from '../src/utils';


const Signup = () => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });
    const setAuthenticated = useGlobalStore(state => state.setAuthenticated);

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name] : e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(user.email.toString().toLowerCase());
        try {
            await Auth.signUp({
                username: crypto.randomUUID(),
                password: user.password.toString(),

                options: {
                    userAttributes: {
                        email: user.email.toString().toLowerCase(),
                        name: user.name.toString(),
                    }
                },
                autoSignIn: { enabled: true }
            });
            await sleep(2000);
            const attributes = (await Auth.fetchAuthSession()).tokens?.idToken?.payload
            console.log(attributes);

            setAuthenticated(attributes?.sub);
            queryClient.refetchQueries({ queryKey: ['user'] });
            router.push('/login');
            

        }
        catch (err) {
            console.log("error registering user: ", err);
            setError("We're sorry, there was an error signing up. Please try again.");
        }
    }

    return (
        <div className="bg-[#F1FAEE] text-black min-h-screen p-10">
            <div className="flex flex-col max-w-4xl mx-auto bg-[#A8DADC] gap-4 p-5 shadow-shadow shadow-[2px_2px_0_1px_#000] border-text sm:border-[1px] sm:rounded-md border-y-[1px]">
              <header className="bg-[#1D3557] text-white text-center p-6">
                  <button onClick={() => router.push('/')} className="text-4xl font-bold hover:opacity-50">Clips for a Cause</button>
                <p className="text-xl">Making a difference, one haircut at a time.</p>
              </header>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className='text-xl font-bold text-center font-header'>Welcome!</div>
                    {error && <div className='p-2 border bg-error border-errorBorder rounded-md'>{error}</div>}
                    <input onChange={handleInputChange} className="p-2 text-black rounded-md bg-background" name="name" type="text" placeholder='Your name' />
                    <input onChange={handleInputChange} className="p-2 text-black rounded-md bg-background" name="email" type="text" placeholder='Email address' />
                    <input onChange={handleInputChange} className="p-2 text-black rounded-md bg-background" name="password" type="password" placeholder='Password' />
                    <button className="bg-[#1D3557] text-[white] p-2 rounded-md hover:opacity-50">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;

      //  <form onSubmit={handleSubmit}>
      //      <input name="name" onChange={handleInputChange} type="text" placeholder='Name' className="p-2 text-black rounded-lg bg-background" />
      //      <input name="email" onChange={handleInputChange} type="text" placeholder='Email address' className="p-2 text-black rounded-lg bg-background" />
      //      <input name="password" onChange={handleInputChange} type="password" placeholder='Password' className="p-2 text-black rounded-lg bg-background" />
      //      {success && <div className='p-2 border bg-successBackground border-successBorder rounded-xl'>{success}</div>}
      //      <button className="bg-primary text-[white] p-2 rounded-lg hover:opacity-50">Sign up</button>
      //  </form>
