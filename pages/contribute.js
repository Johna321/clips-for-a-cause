import Head from 'next/head';
import Image from 'next/image';
import DonationOptions from '../src/components/contributePage/DonationOptions';
import PartnershipComponent from '../src/components/contributePage/PartnershipComponent';
import Volunteer from '../src/components/contributePage/Volunteer';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import styles from '../src/styles/contribute.module.css';
//

export default function Contribute() {
  return (
    
    <>
      <Head>
        <title>Contribute - Clips for a Cause</title>
        <meta name="description" content="Help support our mission by contributing in various ways." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      
      <main className={`${styles.contributeContainer} my-10`}>
        
        
        {/* Donation Options Section */}
        <section className={`${styles.sectionContainer} ${styles.donationOptions}`} aria-labelledby="donation-options-title">
        <DonationOptions />
        </section>

        
        {/* Partnership Opportunities Section */}
        <section aria-labelledby="partnership-opportunities-title">
          <PartnershipComponent />
        </section>
        
        {/* Volunteer Section */}
        <section aria-labelledby="volunteer-title">
          <Volunteer />
        </section>
      </main>
          </>
  );
}
