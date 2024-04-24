import React from 'react';
import Link from 'next/link';
import styles from '../src/styles/thankYou.module.css'; // Ensure you have this CSS module

const ThankYou = () => {
  return (
    <div className={`${styles.thankYouPage} bg-[#F1FAEE] min-h-screen flex items-center justify-center p-10 text-center`}>
      <div className={`${styles.thankYouContainer} bg-[#A8DADC] p-5 rounded-lg shadow-shadow shadow-[2px_2px_0_1px_#000]`}>
        <h1 className={`${styles.title} text-4xl font-bold text-[#1D3557]`}>Thank You!</h1>
        <p className={`${styles.message} text-xl text-[#1D3557]`}>Your generous contribution is greatly appreciated.</p>
        <Link href="/" className={`${styles.homeButton} bg-[#1D3557] text-white py-2 px-4 rounded-md hover:bg-[#457B9D] transition duration-300`}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
