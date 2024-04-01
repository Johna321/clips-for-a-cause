import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/footer.module.css';
/* */

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <section className={styles.about}>
          <h2 className={styles.footerHeading}>Clips for a Cause</h2>
          <p className={styles.footerParagraph}>Empowering communities through haircuts and styling.</p>
          <Link href="/about" legacyBehavior>
        <a className={styles.footerLink}>Learn More</a>
        </Link>
        </section>

        <section className={styles.newsletter}>
          <h2 className={styles.footerHeading}>Stay Updated</h2>
          <p className={styles.footerParagraph}>Join our newsletter to stay informed about our impact.</p>
          <form className={styles.newsletterForm} onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Your email" className={styles.newsletterInput} />
            <button type="submit" className={styles.subscribeButton}>Subscribe</button>
          </form>
        </section>

        <section className={styles.connect}>
        <h2 className={styles.connectHeading}>Connect With Us</h2>
        <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/facebook-svgrepo-com.svg" alt="Facebook" width={24} height={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src="/twitter-svgrepo-com.svg" alt="Twitter" width={24} height={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src="/instagram-1-svgrepo-com.svg" alt="Instagram" width={24} height={24} />
            </a>
        </div>
      </section>
      </div>

      <div className={styles.copyRight}>
        © {year} Clips for a Cause. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
