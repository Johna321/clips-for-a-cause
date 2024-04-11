import Head from 'next/head';
import Image from 'next/image';
import ProgressBar from '../src/components/indexPage/ProgressBar';

export default function Home() {
  const goalProgress = 70;

  return (
    <div className="bg-[#F1FAEE] text-black">
      <Head>
        <title>Clips for a Cause</title>
        <meta name="description" content="Providing free haircuts to those in need while raising funds for good causes." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto p-4 md:p-8">
        <section className="mb-28 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className='bg-[#A8DADC] rounded-xl p-8 shadow-xl'>
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className='text-xl leading-relaxed'>Clips for a Cause is dedicated to breaking down socioeconomic barriers to personal grooming by providing free haircuts to those in need and centralizing fundraising efforts on a dedicated platform.</p>
          </div>
          
          <div className="relative h-64 w-full md:h-96">
            <Image layout="fill" objectFit="contain" src="/cctransparent.png" alt="About Us" />
          </div>
        </section>
        
        <section className="mb-28">
          <h2 className="text-4xl font-bold mb-14 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="inline-block w-48 h-48 relative mb-6">
                <Image layout="fill" objectFit="contain" src="/scissors.svg" alt="Free Haircuts" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Free Haircuts</h3>
              <p className="text-lg">Partnering with local barbers and stylists to provide professional grooming services at no cost.</p>
            </div>
            <div className="text-center">
              <div className="inline-block w-48 h-48 relative mb-6">
                <Image layout="fill" objectFit="contain" src="/fundraising.png" alt="Fundraising" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Fundraising</h3>
              <p className="text-lg">Raising funds to support our mission and expand our reach to help more communities.</p>
            </div>
          </div>
        </section>

        <section className="mb-28">
          <div >
            <h2 className="text-3xl font-bold mb-6 text-center">Help Us Reach Our Next Milestone</h2>
            <ProgressBar progress={goalProgress} />
          </div>
          <p className="text-center text-lg mt-4">We’re currently raising funds to expand our services to more communities. Help us reach our goal by contributing today.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Get Involved</h2>
          <p className="text-center text-lg">Join us in our mission to provide dignity through grooming. Whether you’re a professional looking to volunteer your services, or someone looking to contribute to our cause, get in touch.</p>
        </section>
      </main>
    </div>
  );
}
