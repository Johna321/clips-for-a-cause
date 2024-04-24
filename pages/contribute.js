import Head from 'next/head';
import Image from 'next/image';
import DonationOptions from '../src/components/contributePage/DonationOptions';
import PartnershipComponent from '../src/components/contributePage/PartnershipComponent';
import Volunteer from '../src/components/contributePage/Volunteer';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
//

export default function Contribute() {
  return (
    
    <>
      <Head>
        <title>Contribute - Clips for a Cause</title>
        <meta name="description" content="Help support our mission by contributing in various ways." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <DonationOptions />

          <PartnershipComponent />
        
          <Volunteer />
          </>
  );
}
