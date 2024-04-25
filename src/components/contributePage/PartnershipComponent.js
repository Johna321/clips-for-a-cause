import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useGlobalStore } from '../../utils';
import styles from '../../styles/partnership.module.css';

const PartnershipComponent = () => {
    const router = useRouter();
    const authenticated = useGlobalStore(state => state.authenticated);

    const handlePartnerWithUsClick = () => {
        router.push('/events');
    };

    const handleSupplyProductsClick = () => {
        if (authenticated) {
            router.push('/donate');
        } else {
            router.push('/login');
        }
    };

    return (
        <div className={styles.partnershipContainer}>
            <h2 className="text-4xl font-bold text-center mb-8 text-white">Partnership Opportunities</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
                {/* Partnership Card for Local Barbers */}
                <div className={styles.partnershipCard}>
                    <Image 
                        src="/barber-pole-svgrepo-com.svg" 
                        alt="Local Barbers" 
                        width={80} 
                        height={80} 
                        layout="fixed"
                    />
                    <h3 className="text-2xl font-semibold mb-3">Local Barbers</h3>
                    <p className="text-md mb-4">
                        Join us as a partner to expand our network and create a larger impact in communities nationwide.
                    </p>
                    <button onClick={handlePartnerWithUsClick} className={styles.donateButton}>
                        Partner with Us
                    </button>
                </div>

                {/* Partnership Card for Salons */}
                <div className={styles.partnershipCard}>
                    <Image 
                        src="/salon-svgrepo-com.svg" 
                        alt="Salons" 
                        width={80} 
                        height={80} 
                        layout="fixed"
                    />
                    <h3 className="text-2xl font-semibold mb-3">Salons</h3>
                    <p className="text-md mb-4">
                        Collaborate with us to offer your space for events, raising awareness and community engagement.
                    </p>
                    <button onClick={handlePartnerWithUsClick} className={styles.donateButton}>
                        Collaborate
                    </button>
                </div>

                {/* Partnership Card for Product Suppliers */}
                <div className={styles.partnershipCard}>
                    <Image 
                        src="/disaster-prevention-goods-svgrepo-com.svg" 
                        alt="Product Suppliers" 
                        width={80} 
                        height={80} 
                        layout="fixed"
                    />
                    <h3 className="text-2xl font-semibold mb-3">Product Suppliers</h3>
                    <p className="text-md mb-4">
                        Support us by providing quality products for our events, ensuring the best experience for our beneficiaries.
                    </p>
                    <button onClick={handleSupplyProductsClick} className={styles.donateButton}>
                        Supply Products
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PartnershipComponent;
