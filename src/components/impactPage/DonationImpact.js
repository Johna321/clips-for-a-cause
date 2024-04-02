import React from 'react';
import styles from '../../styles/DonationImpact.module.css'; // Assume you have this CSS file for styling

const DonationImpactData = [
  {
    id: 1,
    label: 'Haircuts Provided',
    value: '1,200+',
    image: '/image2vector.svg', // Path to your image
    keywords: ['Community', 'Support'] // Keywords to highlight
  },
 {
  id: 2,
    label: 'Funds Raised',
    value: '$30,000+',
    image: '/image2vector.svg', // Path to your image
  keywords: ['Community', 'Support'] // Keywords to highlight
  },
  {
    id: 3,
    label: 'Volunteers Engaged',
    value: '150+',
    image: '/image2vector.svg', // Path to your image
    keywords: ['Community', 'Support'] // Keywords to highlight
  },
  
];

const DonationImpact = () => {
  return (
    <div className={styles.impactContainer} style={{ backgroundImage: 'url(/barber-pole-svgrepo-com.svg)' }}>
      <h2>Donation Impact</h2>
      <div className={styles.impactGrid}>
        {DonationImpactData.map((impact) => (
          <div key={impact.id} className={styles.impactCard}>
            <img src={impact.image} alt="" className={styles.impactImage} />
            <div className={styles.value}>{impact.value}</div>
            <div className={styles.label}>
              {impact.label.split(' ').map(word => 
                impact.keywords.includes(word) ? <span className={styles.highlight}>{word}</span> : word
              ).reduce((prev, curr) => [prev, ' ', curr])}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationImpact;