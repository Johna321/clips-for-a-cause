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
            console.error("error registering user: ", err);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" onChange={handleInputChange} type="text" placeholder='Name' className="p-2 text-black rounded-lg bg-background" />
            <input name="email" onChange={handleInputChange} type="text" placeholder='Email address' className="p-2 text-black rounded-lg bg-background" />
            <input name="password" onChange={handleInputChange} type="password" placeholder='Password' className="p-2 text-black rounded-lg bg-background" />
            {success && <div className='p-2 border bg-successBackground border-successBorder rounded-xl'>{success}</div>}
            <button className="bg-primary text-[white] p-2 rounded-lg hover:opacity-50">Sign up</button>
        </form>
    );
}

export default Signup;

