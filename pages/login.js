import { Amplify } from 'aws-amplify';
import * as Auth from 'aws-amplify/auth';
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
        <div className="flex flex-col gap-4 bg-card p-5 shadow-shadow shadow-[2px_2px_0_1px_#000] border-text sm:border-[1px] sm:rounded-md border-y-[1px]">
        <form onSubmit={login} className="flex flex-col gap-4">
            <div className='text-xl text-center font-header'>Welcome back!</div>
            {error && <div className='p-2 border bg-errorBackground border-errorBorder rounded-md'>{error}</div>}
            <input className="p-2 text-black rounded-md bg-background" name="email" type="text" placeholder='Email address' />
            <input className="p-2 text-black rounded-md bg-background" name="password" type="password" placeholder='Password' />
            <button className="bg-secondary text-[white] p-2 rounded-md hover:opacity-50">Log in</button>
        </form>
        <div className='text-center font-header'>Don't have an account?</div>
        <Link href="/signup" className="text-center bg-primary text-[white] p-2 rounded-md hover:opacity-50">Sign up for free</Link>
    </div>
    );
}

export default Login;
