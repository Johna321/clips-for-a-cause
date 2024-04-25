import React from 'react';
import styles from '../../styles/DonationImpact.module.css'; // Assume you have this CSS file for styling


const DonationImpact = () => {
  return (
    <div className={styles.impactContainer}>
      <h2 className={styles.impactTitle}>Donation Impact</h2>
      <div className={styles.impactGrid}>
        
        <div className={styles.impactCard}>
          <span className={styles.icon}>✂️</span> {/* Haircut emoji */}
          <div className={styles.value}>1,200+</div>
          <div className={styles.label}>Haircuts Provided</div>
        </div>
        
        <div className={styles.impactCard}>
          <span className={styles.icon}>💰</span> {/* Money emoji */}
          <div className={styles.value}>$30,000+</div>
          <div className={styles.label}>Funds Raised</div>
        </div>
        
        <div className={styles.impactCard}>
          <span className={styles.icon}>🤝</span> {/* People emoji */}
          <div className={styles.value}>150+</div>
          <div className={styles.label}>Volunteers Engaged</div>
        </div>
        
      </div>
    </div>
  );
};

export default DonationImpact;
