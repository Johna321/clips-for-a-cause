// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ProgressBar from '../src/components/indexPage/ProgressBar';
import { useGlobalStore } from '../src/utils';
import * as Auth from 'aws-amplify/auth';
import { signOut } from 'aws-amplify/auth';
import { useState, useEffect } from 'react';

export default function Home() {
  const goalProgress = 70;
  const authenticated = useGlobalStore(state => state.authenticated);
  const setAuthenticated = useGlobalStore(state => state.setAuthenticated);
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
      if (authenticated) getUserInfo();
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
    <div className="bg-[#F1FAEE] text-black">
      {authenticated ?
       <div className="absolute top-0 right-0 p-4">
         <p className="text-white">Welcome back, {user.name}</p>
       </div>
        :
       <></>
      }
      <Head>
        <title>Clips for a Cause</title>
        <meta name="description" content="Providing free haircuts to those in need while raising funds for good causes." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl p-8 mx-auto">
        <section className="items-center mb-56 grid grid-cols-2 -mx-60">
          <div className='bg-[#A8DADC] rounded-xl p-6 py-24 shadow-xl'>
            <h2 className="mb-4 text-4xl font-bold">About Us</h2>
              <p className='text-xl'>Clips for a Cause is dedicated to breaking down socioeconomic barriers to personal grooming by providing free haircuts to those in need and centralizing fundraising efforts on a dedicated platform.</p>
          </div>
            <Image className = "mx-28" src="/about-us.png" alt="About Us" width={400} height={400} />
        </section>
        
        <section className="mb-28">
          <h2 className="mb-20 text-4xl font-bold text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center">
              <Image className="mb-20" src="/scissors.svg" alt="Free Haircuts" width={300} height={300} />
              <h3 className="font-bold">Free Haircuts</h3>
              <p>Partnering with local barbers and stylists to provide professional grooming services at no cost.</p>
            </div>
            <div className="text-center">
              <Image className = "mb-8 ml-20" src="/fundraising.png" alt="Fundraising" width={250} height={250} />
              <h3 className="font-bold">Fundraising</h3>
              <p>Raising funds to support our mission and expand our reach to help more communities.</p>
            </div>
          </div>
        </section>

        <section className="mb-28">
          <div >
            <h2 className="mb-4 text-2xl font-bold text-center">Help Us Reach Our Next Milestone</h2>
            <ProgressBar progress={goalProgress} />
          </div>
          <p className="text-center">We’re currently raising funds to expand our services to more communities. Help us reach our goal by contributing today.</p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-center">Get Involved</h2>
          <p className="text-center">Join us in our mission to provide dignity through grooming. Whether you’re a professional looking to volunteer your services, or someone looking to contribute to our cause, get in touch.</p>
        </section>
        
      </main>

      <footer className="bg-[#E63946] text-center p-4">
        <p>© {new Date().getFullYear()} Clips for a Cause. All rights reserved.</p>
      </footer>
    </div>
  );
}
