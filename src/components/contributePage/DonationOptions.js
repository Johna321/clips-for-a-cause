import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useGlobalStore } from '../../utils';
import styles from '../../styles/donationoptions.module.css';

const DonationOptions = () => {
  const router = useRouter();
  const authenticated = useGlobalStore(state => state.authenticated);

  const handleDonateClick = () => {
    if (authenticated) {
      router.push('/donate');
    } else {
      router.push('/guest-donate');
    }
  };

  return (
    <div className={`${styles.donationOptionsContainer}`}>
      <h2 className="text-4xl font-bold text-center text-blue-300 mb-10">Support Our Mission</h2>
      <div className={`${styles.donationCardContainer}`}>
        <div className={`${styles.donationCard}`}>
          <div className="mb-4" style={{ display: 'flex', justifyContent: 'center' }}>
            <Image src="/one-key-svgrepo-com.svg" alt="One-Time Donation" width={80} height={80} />
          </div>
          <h3 className="text-2xl font-semibold mb-3">One-Time Donation</h3>
          <p className="mb-4">
            Your contribution can help us offer haircuts and grooming services to improve lives.
          </p>
          <button onClick={handleDonateClick} className={`${styles.donateButton}`}>
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationOptions;
