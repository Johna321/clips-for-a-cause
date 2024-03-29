import * as Auth from 'aws-amplify/auth';
import * as API from 'aws-amplify/api';
import { signOut } from 'aws-amplify/auth';
import { useRouter } from 'next/router';
import { useGlobalStore } from '../src/utils';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState, useEffect } from 'react';

const apiClient = API.generateClient();

const Dashboard = () => {
    const router = useRouter();
    const setAuthenticated = useGlobalStore(state => state.setAuthenticated);
    const authenticated = useGlobalStore(state => state.authenticated);
    const [user, setUser] = useState({
        sub: "",
        name: "",
        email: "",
    });

    const getUserInfo = async() => {
        try {
            const { sub, name, email } = await Auth.fetchUserAttributes();
            setUser({ sub, name, email});
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getUserInfo();
    }, []);

    const handleSignOut = async() => {
        try {
            await signOut();
            setAuthenticated(false);
            router.push('/');
        } catch (err) {
            console.error("error signing out: ", err);
        }
    }

    return (
        <>
            <div className="flex flex-col gap-4 bg-card p-5 shadow-shadow shadow-[2px_2px_0_1px_#000] border-text sm:border-[1px] sm:rounded-md border-y-[1px]">
                <div className='mb-[-10px]'>Welcome back, {user.name}</div>
                <button onClick={handleSignOut}>Sign Out</button>
            </div>
        </>
    );
}

export default Dashboard;
