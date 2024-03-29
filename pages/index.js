import { useRouter } from 'next/router';
import { useGlobalStore } from '../src/utils';

// pages/index.js
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
    const router = useRouter();
    const authenticated = useGlobalStore(state => state.authenticated);
    if (authenticated) router.push('/dashboard');
    return (
      <div>
        <Head>
          <title>Clips for a Cause</title>
          <meta name="description" content="Providing free haircuts to those in need while raising funds for good causes." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="p-6 text-center text-white bg-blue-500">
          <h1 className="text-4xl font-bold">Clips for a Cause</h1>
          <p className="text-xl">Making a difference, one haircut at a time.</p>
        </header>

        <main className="max-w-4xl p-8 mx-auto">
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-center">About Us</h2>
            <p>Clips for a Cause is dedicated to breaking down socioeconomic barriers to personal grooming by providing free haircuts to those in need and centralizing fundraising efforts on a dedicated platform.</p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-center">
                <Image src="/scissors.svg" alt="Free Haircuts" width={64} height={64} />
                <h3 className="font-bold">Free Haircuts</h3>
                <p>Partnering with local barbers and stylists to provide professional grooming services at no cost.</p>
              </div>
              <div className="text-center">
                <Image src="/fundraising.svg" alt="Fundraising" width={64} height={64} />
                <h3 className="font-bold">Fundraising</h3>
                <p>Raising funds to support our mission and expand our reach to help more communities.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-center">Get Involved</h2>
            <p className="text-center">Join us in our mission to provide dignity through grooming. Whether you’re a professional looking to volunteer your services, or someone looking to contribute to our cause, get in touch.</p>
          </section>
        </main>

        <footer className="p-4 text-center bg-gray-200">
          <p>© {new Date().getFullYear()} Clips for a Cause. All rights reserved.</p>
        </footer>
      </div>
    );
}
