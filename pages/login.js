import { Amplify } from 'aws-amplify';
import { Auth } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useGlobalStore } from '../src/utils/';

const Login = () => {
    
    const router = useRouter();
    const setAuthenticated = useGlobalStore(state => state.setAuthenticated);
    const [error, setError] = useState('');

    const login = async (e) => {
        e.preventDefault();
        setError('');
        const { email, password } = Object.fromEntries(new FormData(e.currentTarget));
        try {
            await Auth.signIn({
                username: email.toString(),
                password: password.toString(),
            });
            const attributes = (await Auth.fetchAuthSession()).tokens?.idToken?.payload;
            console.log(attributes?.sub);
            setAuthenticated(attributes?.sub);

            router.push('/');

        }
        catch (err) {
            console.log(err);
            setError(confirm?.error?.message ?? `There was an issue logging in. Please try again.`);
        }
    }

    return(
        <div className="bg-[#F1FAEE] min-h-screen p-10 text-black">
            <div className="flex flex-col bg-[#A8DADC] gap-4 bg-card p-5 shadow-shadow shadow-[2px_2px_0_1px_#000] border-text sm:border-[1px] sm:rounded-md border-y-[1px]">
              <header className="bg-[#1D3557] text-white text-center p-6">
                  <button className="text-4xl font-bold hover:opacity-50" onClick={() => router.push('/')}>Clips for a Cause</button>
                <p className="text-xl">Making a difference, one haircut at a time.</p>
              </header>
                <form onSubmit={login} className="flex flex-col gap-4">
                    <h1 className='text-xl font-bold text-center font-header'>Welcome back!</h1>
                    {error && <div className='p-2 border bg-errorBackground border-errorBorder rounded-md'>{error}</div>}
                    <input className="p-2 text-black rounded-md bg-background" name="email" type="text" placeholder='Email address' />
                    <input className="p-2 text-black rounded-md bg-background" name="password" type="password" placeholder='Password' />
                    <button className="text-[white] bg-[#1D3557] p-2 rounded-md hover:opacity-50">Log in</button>
                </form>
                <div className="text-center font-header">
                    <div><i>Don't have an account?</i></div>
                    <Link href="/signup" className="p-2 text-center bg-primary rounded-md hover:opacity-50">Sign up for free</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
