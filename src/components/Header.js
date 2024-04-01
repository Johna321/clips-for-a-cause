import React from 'react';
import Image from 'next/image';
import styles from '../styles/header.module.css';
/* */
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.branding}>
        <h1 className={styles.logo}>Clips for a Cause</h1>
        <p className={styles.slogan}>Making a difference, one haircut at a time.</p>
      </div>
      <nav aria-label="Main navigation">
        <ul className={styles.navMenu}>
          <li><a href="/about">About</a></li>
          <li><a href="/contribute">Contribute</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/impact">Impact</a></li>
          <li><a href="/signup">Sign Up</a></li>
          <li><a href="/login">Log In</a></li>
        </ul>
      </nav>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search" className={styles.searchInput} />
        <button><span className={styles.searchIcon}></span></button>
      </div>
    </header>
  );
};

export default Header;
