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

  const getUserInfo = async () => {
    try {
      const { sub, name, email } = await Auth.fetchUserAttributes();
      setUser({ sub, name, email });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      setAuthenticated(false);
      router.push('/');
    } catch (err) {
      console.error("error signing out: ", err);
    }
  }

  return (
    <div className='bg-white min-h-screen p-5'>
      <h1 className='text-black text-center font-bold text-4xl'>Dashboard for {user.name}</h1>
    </div>
  );
}

export default Dashboard;
