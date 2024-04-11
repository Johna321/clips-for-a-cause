import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import * as Auth from 'aws-amplify/auth';
import { useGlobalStore } from '../utils';
import styles from '../styles/header.module.css';

const Header = () => {
  const router = useRouter();

  const authenticated = useGlobalStore(state => state.authenticated);
  const setAuthenticated = useGlobalStore(state => state.setAuthenticated);

  const [dropOpen, setDropOpen] = useState(false);

  const toggleDropdown = () => {
    setDropOpen(!dropOpen);
  }

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
    if (authenticated) getUserInfo();
  }, [authenticated]);

  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      setAuthenticated(false);
      router.push('/');
    } catch (err) {
      console.error("error signing out: ", err);
    }
  }

  return (
    <header className={styles.header}>
     <div onClick={() => router.push('/')} className={styles.branding}>
      <h1 className={styles.logo}>Clips for a Cause</h1>
      <p className={styles.slogan}>Making a difference, one haircut at a time.</p>
    </div>
      <nav aria-label="Main navigation">
        <ul className={styles.navMenu}>
          <li><a href="/about">About</a></li>
          <li><a href="/contribute">Contribute</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/impact">Impact</a></li>
        </ul>
      </nav>
      <div className={styles.searchBar}>
        {authenticated ?
          <div>
            <button onClick={toggleDropdown} data-dropdown-toggle="dropdownSkidding" data-dropdown-offset-distance="10" data-dropdown-offset-skidding="100" data-dropdown-placement="right" className="text-white bg-gray-700 hover:bg-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">
              Welcome back, {user.name}
              <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>
            {dropOpen && (
              <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 w-44" aria-labelledby="dropdownDefault">
                  <li>
                    <button onClick={() => router.push('/dashboard')} className="w-44 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</button>
                  </li>
                  <li>
                    <button onClick={() => console.log("nothing")} className="w-44 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</button>
                  </li>
                  <li>
                    <button onClick={handleSignOut} className="w-44 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</button>
                  </li>
                </ul>
              </div>
            )}
          </div>
          :
          <>
            <button className="p-2" onClick={() => router.push('/signup')}>Sign Up</button>
            <button className="p-2" onClick={() => router.push('/login')}>Log In</button>
          </>
        }
      </div>
    </header>
  );
};

export default Header;
