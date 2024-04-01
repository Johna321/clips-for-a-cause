import React from 'react';
import Image from 'next/image';
import styles from '../../styles/donationoptions.module.css';
/* */


const DonationOptions = () => {
  return (
    <div className={`${styles.donationOptionsContainer} my-10`}>
    
    <h2 className="text-4xl font-bold text-center text-blue-300">Support Our Mission</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Donation Card for One-Time Donation */}
        <div className={`${styles.donationCard} flex flex-col items-center text-center p-6`}>
          <div className="mb-4">
            <Image src="/one-key-svgrepo-com.svg" alt="One-Time Donation" width={80} height={80} />
          </div>
          <h3 className="text-2xl font-semibold mb-3">One-Time Donation</h3>
          <p className="text-md mb-4">
            Your contribution can help us offer haircuts and grooming services to improve lives.
          </p>
          <button className={`${styles.donateButton} mt-auto`}>
            Donate Now
          </button>
        </div>

        
        {/* Donation Card for Monthly Pledge */}
        <div className={`${styles.donationCard} flex flex-col items-center text-center p-6`}>
          <div className="mb-4">
            <Image src="/cycle-rotate-finance-svgrepo-com.svg" alt="Monthly Pledge" width={80} height={80} />
          </div>
          <h3 className="text-2xl font-semibold mb-3">Monthly Pledge</h3>
          <p className="text-md mb-4">
            Regular support ensures sustainability for our ongoing community projects and events.
          </p>
          <button className={`${styles.donateButton} mt-auto bg-pink-500 hover:bg-pink-600`}>
            Pledge Monthly
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationOptions;
