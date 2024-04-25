import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useGlobalStore } from '../../utils';
import styles from '../../styles/volunteer.module.css';

const VolunteerComponent = () => {
  const router = useRouter();
  const authenticated = useGlobalStore(state => state.authenticated);

  const handleSignUpToVolunteerClick = () => {
    if (authenticated) {
      router.push('/events');
    } else {
      router.push('/login');
    }
  };

  return (
    <div className={styles.volunteerContainer}>
      <h2 className={styles.volunteerTitle}>Volunteer with Us</h2>
      
      <div className={styles.volunteerFlexContainer}>
        <div className={styles.volunteerImageContainer}>
          <Image 
            src="/raising-hands-light-skin-tone-svgrepo-com.svg" 
            alt="Volunteer Stylists" 
            layout="responsive" 
            width={300} 
            height={300} 
          />
        </div>
        
        <div className={styles.volunteerContentContainer}>
          <h3 className={styles.volunteerSubtitle}>Become a Volunteer Stylist</h3>
          <p className={styles.volunteerDescription}>
            If you have a passion for making a difference and skills in hair styling, join us as a volunteer at our next event. 
            Your talent can help uplift spirits and provide a sense of normalcy and dignity to those in need.
          </p>
          <ul className={styles.volunteerBullets}>
            <li className={styles.volunteerBulletItem}>
              <span className={styles.volunteerBulletIcon}></span>
              Network with other passionate stylists
            </li>
            <li className={styles.volunteerBulletItem}>
              <span className={styles.volunteerBulletIcon}></span>
              Use your skills to contribute to a noble cause
            </li>
            <li className={styles.volunteerBulletItem}>
              <span className={styles.volunteerBulletIcon}></span>
              Be a part of community-driven change
            </li>
          </ul>
          <button onClick={handleSignUpToVolunteerClick} className={styles.volunteerButton}>
            Sign Up to Volunteer
          </button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerComponent;
