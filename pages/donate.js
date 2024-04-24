import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useGlobalStore } from '../src/utils/';
import styles from '../src/styles/donate.module.css'; // Ensure you have this CSS module

const Donate = () => {
  const router = useRouter();
  const authenticated = useGlobalStore(state => state.authenticated);
  const [donationType, setDonationType] = useState('money');
  const [donationAmount, setDonationAmount] = useState('');
  const [productDetails, setProductDetails] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [holderName, setHolderName] = useState('');
  const [error, setError] = useState('');

  const handleDonationTypeChange = (event) => {
    setDonationType(event.target.value);
    setError('');
  };

  const submitDonation = (e) => {
    e.preventDefault();
    if (donationType === 'monthly' && !authenticated) {
      setError('You must be logged in to set up a monthly donation.');
      return;
    }
    if (donationType === 'product' && !productDetails) {
      setError('Please specify the product you wish to donate.');
      return;
    }
    console.log(`Donation type: ${donationType}, Amount/Product: ${donationType === 'money' ? donationAmount : productDetails}`);
    // Log or send a notification of product donation
    router.push('/thankyou');
  };

  return (
    <div className="bg-[#F1FAEE] min-h-screen p-10 text-black">
      <div className="flex flex-col bg-[#A8DADC] gap-4 p-5 shadow-shadow shadow-[2px_2px_0_1px_#000] sm:border-[1px] sm:rounded-md">
        <header className="bg-[#1D3557] text-white text-center p-6">
          <h1 className="text-4xl font-bold">Clips for a Cause</h1>
          <p className="text-xl">Your contribution makes a difference.</p>
        </header>
        <form onSubmit={submitDonation} className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-center">Make a Donation</h2>
          {error && <div className='p-2 border bg-red-100 border-red-400 rounded-md'>{error}</div>}
          <div className="flex justify-around">
            <label className="flex items-center gap-2">
              <input type="radio" value="money" checked={donationType === 'money'} onChange={handleDonationTypeChange} />
              Monetary Donation
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" value="product" checked={donationType === 'product'} onChange={handleDonationTypeChange} />
              Product Donation
            </label>
          </div>
          {donationType === 'money' ? (
            <div className="flex flex-col gap-2">
              {[10, 20, 50, 100, 500].map(amount => (
                <button key={amount} type="button" className={`${styles.donationButton} ${donationAmount === amount.toString() ? styles.active : ''}`} onClick={() => setDonationAmount(amount.toString())}>
                  ${amount}
                </button>
              ))}
              <input className={`${styles.input} w-full`} type="number" placeholder="Custom Amount" value={donationAmount} onChange={(e) => setDonationAmount(e.target.value)} />
              <input className={`${styles.input} w-full`} type="text" placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
              <input className={`${styles.input} w-full`} type="text" placeholder="Expiry MM/YY" value={expiry} onChange={(e) => setExpiry(e.target.value)} />
              <input className={`${styles.input} w-full`} type="text" placeholder="CVC" value={cvc} onChange={(e) => setCvc(e.target.value)} />
              <input className={`${styles.input} w-full`} type="text" placeholder="Cardholder Name" value={holderName} onChange={(e) => setHolderName(e.target.value)} />
              <button className={`${styles.donateButton}`} type="submit">Donate Now</button>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <textarea className={`${styles.input} w-full`} placeholder="Describe the products you wish to donate" value={productDetails} onChange={(e) => setProductDetails(e.target.value)} />
              <input className={`${styles.input} w-full`} type="text" placeholder="Your Name" value={contactName} onChange={(e) => setContactName(e.target.value)} />
              <input className={`${styles.input} w-full`} type="email" placeholder="Your Email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} />
              <input className={`${styles.input} w-full`} type="tel" placeholder="Your Phone Number" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} />
              <div className="p-2 bg-[#1D3557] text-white">
                Please send your product donations to:
                <p>PO Box 12345, Gainesville, FL, 32611</p>
              </div>
              <button className={`${styles.donateButton}`} type="submit">Notify Us</button>
            </div>
          )}
        </form>
        <div className="text-center">
          <Link href="/">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Donate;
