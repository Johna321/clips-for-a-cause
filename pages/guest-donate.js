import '../src/styles/guest-donate.css';
import LoginModal from '../src/components/LoginModal';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Amplify } from 'aws-amplify';
import * as Auth from 'aws-amplify/auth';

export default function Donate() {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(true);

    const checkAuth = async () => {
        try {
            await Auth.currentAuthenticatedUser();
            // User is authenticated, redirect to dashboard
            console.log('User is authenticated');
            router.push('/dashboard');
        } catch (error) {
            // User is not authenticated, show login modal
            setIsModalOpen(true);
        }
    };

    useEffect(() => {
        console.log('Checking auth');
        checkAuth();
    }, []);


    const closeModal = () => {
        setIsModalOpen(false);
    };

    const [donationType, setDonationType] = useState('one-time');
    const [donationAmount, setDonationAmount] = useState('');
    const [activeButton, setActiveButton] = useState(null);
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCVC] = useState('');
    const [cardholderName, setCardholderName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [donateClicked, setDonateClicked] = useState(false);


    const handleDonationAmountChange = (event) => {
        // Remove non-numeric characters from the input value
        const numericValue = event.target.value.replace(/\D/g, '');
        // Convert the numeric value to dollars format (e.g., "1000" becomes "$10.00")
        const formattedValue = (numericValue / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        // Update the donation amount state with the formatted value
        setDonationAmount(formattedValue);
    };
    const handlePresetDonation = (amount, buttonIndex) => {
        // Set the donation amount to the preset value
        setDonationAmount(amount);
        // Set the active button index
        setActiveButton(buttonIndex);
    };

    const isValidCardNumber = (cardNumber) => {
        // Visa, Mastercard, American Express, Diners Club, Discover, JCB
        const cardNumberRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12})$/;
        return cardNumberRegex.test(cardNumber);
    };

    const isValidExpiryDate = (expiryDate) => {
        // MM/YY format
        const expiryDateRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
        return expiryDateRegex.test(expiryDate);
    };

    const isValidCVC = (cvc) => {
        // Three or four digits
        const cvcRegex = /^[0-9]{3,4}$/;
        return cvcRegex.test(cvc);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!isValidCardNumber(cardNumber)) {
            setErrorMessage('Invalid card number. Please enter a valid card number.');
            return;
        }

        if (!isValidCVC(cvc)) {
            setErrorMessage('Invalid CVC. Please enter a valid CVC.');
            return;
        }

        if (!isValidExpiryDate(expiry)) {
            setErrorMessage('Invalid expiry date. Please enter a valid expiry date in MM/YY format.');
            return;
        }

        setErrorMessage('');
        router.push('/thankyou');
    };

    return (
        <main className="donationwrapper">
            <LoginModal isOpen={isModalOpen} onRequestClose={closeModal} />
            <div className="left-side">
            </div>
            <form onSubmit={handleFormSubmit} className="donation-form">
                <h2 className='text-2xl font-bold mb-8'>Your contribution makes a difference.</h2>
                <div className='mb-6'>
                    <button
                        className={`donation-option ${donationType === 'one-time' ? 'active' : ''}`}
                        onClick={() => setDonationType('one-time')}>
                        One-time Donation
                    </button>
                    <button
                        className={`donation-option ${donationType === 'monthly' ? 'active' : ''}`}
                        onClick={() => setDonationType('monthly')}>
                        Monthly Donation
                    </button>
                </div>

                <div className='mb-6'>
                    <button className={`donation-option-preset ${activeButton === 0 ? 'active' : ''}`}
                        onClick={() => handlePresetDonation('$10.00', 0)}>$10</button>
                    <button className={`donation-option-preset ${activeButton === 1 ? 'active' : ''}`}
                        onClick={() => handlePresetDonation('$20.00', 1)}>$20</button>
                    <button className={`donation-option-preset ${activeButton === 2 ? 'active' : ''}`}
                        onClick={() => handlePresetDonation('$50.00', 2)}>$50</button>
                    <button className={`donation-option-preset ${activeButton === 3 ? 'active' : ''}`}
                        onClick={() => handlePresetDonation('$100.00', 3)}>$100</button>
                    <button className={`donation-option-preset ${activeButton === 4 ? 'active' : ''}`}
                        onClick={() => handlePresetDonation('$500.00', 4)}>$500</button>
                </div>


                {/* Donation amount input */}
                <div className='relative mb-4'>
                    <input
                        type="text"
                        id="donationAmount"
                        name="donationAmount"
                        value={donationAmount}
                        onChange={handleDonationAmountChange}
                        placeholder="$0.00"
                        className="bg-gray-100 p-2 rounded-md w-full"
                    />
                </div>

                <div className="relative mb-4">
                    <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={cardNumber}
                        onChange={(event) => {
                            // Remove non-digit characters from input
                            const formattedValue = event.target.value.replace(/\D/g, '');
                            // Add space after every 4 characters
                            const formattedNumber = formattedValue.replace(/(\d{4})/g, '$1 ').trim();
                            // Update state with formatted number
                            setCardNumber(formattedNumber);
                        }}
                        className="bg-gray-100 p-2 rounded-md w-full"
                    />
                    <label htmlFor="cardNumber" className={`absolute left-2 top-2 transition-all text-gray-400 ${cardNumber ? 'hidden' : ''}`}>Card Number</label>
                </div>
                <div className="relative mb-4">
                    <input
                        type="text"
                        id="expiry"
                        name="expiry"
                        value={expiry}
                        onChange={(event) => {
                            // Remove non-digit characters from input
                            const formattedValue = event.target.value.replace(/\D/g, '');
                            // Add slash after first 2 characters if length is greater than 2
                            let formattedExpiry = formattedValue;
                            if (formattedValue.length > 2) {
                                formattedExpiry = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2);
                            }
                            // Update state with formatted expiry
                            setExpiry(formattedExpiry);
                        }}
                        className="bg-gray-100 p-2 rounded-md w-full"
                    />
                    <label htmlFor="expiry" className={`absolute left-2 top-2 transition-all text-gray-400 ${expiry ? 'hidden' : ''}`}>Expiry Date MM/YY</label>
                </div>
                <div className="relative mb-4">
                    <input
                        type="text"
                        id="cvc"
                        name="cvc"
                        value={cvc}
                        onChange={(event) => {
                            // Remove non-digit characters from input
                            const formattedValue = event.target.value.replace(/\D/g, '');
                            // Update state with formatted CVC
                            setCVC(formattedValue);
                        }}
                        className="bg-gray-100 p-2 rounded-md w-full"
                    />
                    <label htmlFor="cvc" className={`absolute left-2 top-2 transition-all text-gray-400 ${cvc ? 'hidden' : ''}`}>CVC</label>
                </div>
                <div className="relative mb-6">
                    <input
                        type="text"
                        id="cardholderName"
                        name="cardholderName"
                        value={cardholderName}
                        onChange={(event) => setCardholderName(event.target.value)}
                        className="bg-gray-100 p-2 rounded-md w-full"
                    />
                    <label htmlFor="cardholderName" className={`absolute left-2 top-2 transition-all text-gray-400 ${cardholderName ? 'hidden' : ''}`}>Cardholder Name</label>
                </div>
                <div className="donation-submit mb-12">
                    <button type="submit" onClick={handleFormSubmit}>Donate</button>
                </div>
                {donateClicked && errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}   
            </form>

        </main >
    );
};
