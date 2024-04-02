import Head from 'next/head';
import Image from 'next/image';
import ImpactStories from '../src/components/impactPage/ImpactStories.js';
import DonationImpact from '../src/components/impactPage/DonationImpact.js';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import styles from '../src/styles/ImpactStories.module.css';

export default function Impact() {
  return (
    <>
      <Head>
        <title>Impact - Clips for a Cause</title>
        <meta name="description" content="Discover the real-world impact of your contributions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.impactContainer} my-10`}>
        {/* Impact Stories Section */}
        <section className={`${styles.sectionContainer} ${styles.impactStories}`} aria-labelledby="impact-stories-title">
          <ImpactStories />
        </section>

        {/* Donation Impact Section */}
        <section className={`${styles.sectionContainer} ${styles.donationImpact}`} aria-labelledby="donation-impact-title">
          <DonationImpact />
        </section>
      </main>
    </>
  );
}
