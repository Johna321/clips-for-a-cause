// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ProgressBar from '../src/components/indexPage/ProgressBar';
import styles from '../src/styles/index.css';

export default function Home() {
  const goalProgress = 70;
  return (
    <div className="bg-[#F1FAEE] text-black">
      <Head>
        <title>Clips for a Cause</title>
        <meta name="description" content="Providing free haircuts to those in need while raising funds for good causes." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-[#1D3557] text-white text-center p-6">
        <h1 className="text-4xl font-bold">Clips for a Cause</h1>
        <p className="text-xl">Making a difference, one haircut at a time.</p>
      </header>

      <nav className="bg-[#1D3557] text-white text-center p-4">
        <Link href="/about" className="nav-link">About</Link>
        <Link href="/contribute" className="nav-link">Contribute</Link>
        <Link href="/events" className="nav-link">Events</Link>
        <Link href="/impact" className="nav-link">Impact</Link>
      </nav>

      <main className="mx-auto max-w-4xl p-8">
        <section className="mb-56 grid grid-cols-2 items-center -mx-60">
          <div className='bg-[#A8DADC] rounded-xl p-6 py-24 shadow-xl'>
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
              <p className='text-xl'>Clips for a Cause is dedicated to breaking down socioeconomic barriers to personal grooming by providing free haircuts to those in need and centralizing fundraising efforts on a dedicated platform.</p>
          </div>
            <Image className = "mx-28" src="/about-us.png" alt="About Us" width={400} height={400} />
        </section>
        
        <section className="mb-28">
          <h2 className="text-4xl font-bold text-center mb-20">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div c blassName="text-center">
              <Image className="mb-20" src="/scissors.svg" alt="Free Haircuts" width={300} height={300} />
              <h3 className="font-bold">Free Haircuts</h3>
              <p>Partnering with local barbers and stylists to provide professional grooming services at no cost.</p>
            </div>
            <div className="text-center">
              <Image className = "ml-20 mb-8" src="/fundraising.png" alt="Fundraising" width={250} height={250} />
              <h3 className="font-bold">Fundraising</h3>
              <p>Raising funds to support our mission and expand our reach to help more communities.</p>
            </div>
          </div>
        </section>

        <section className="mb-28">
          <div className={styles.container}>
            <h2 className="text-2xl font-bold text-center mb-4">Help Us Reach Our Next Milestone</h2>
            <ProgressBar progress={goalProgress} />
          </div>
          <p className="text-center">We’re currently raising funds to expand our services to more communities. Help us reach our goal by contributing today.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-4">Get Involved</h2>
          <p className="text-center">Join us in our mission to provide dignity through grooming. Whether you’re a professional looking to volunteer your services, or someone looking to contribute to our cause, get in touch.</p>
        </section>
        
      </main>

      <footer className="bg-[#E63946] text-center p-4">
        <p>© {new Date().getFullYear()} Clips for a Cause. All rights reserved.</p>
      </footer>
    </div>
  );
}
