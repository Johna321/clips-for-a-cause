import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Auth from 'aws-amplify/auth';
import { useGlobalStore } from '../src/utils';
import styles from '../src/styles/dashboard.module.css';
import { eventsData } from '../src/components/eventsPage/calendar'; // Adjust the import path as necessary

const Dashboard = () => {
  const router = useRouter();
  const authenticated = useGlobalStore(state => state.authenticated); // Assuming this provides the authenticated state
  const setAuthenticated = useGlobalStore(state => state.setAuthenticated);
  const [user, setUser] = useState({ sub: "", name: "", email: "", dateJoined: "January 2020" });
  const [rsvpedEvents, setRsvpedEvents] = useState([]);

  const [donations, setDonations] = useState([]);


  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const { sub, name, email } = await Auth.fetchUserAttributes();
        setUser({ sub, name, email });
      } catch (err) {
        console.error("Failed to fetch user attributes:", err);
      }
    };

    if (authenticated) {
      getUserInfo();
      fetchRsvpedEvents(); // Call the function to fetch RSVP'd events
    }
  }, [authenticated]);

  const handleViewEvents = () => {
    router.push('/events');
  };

  const fetchRsvpedEvents = async () => {
    setRsvpedEvents(eventsData);
  };

  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      setAuthenticated(false);
      router.push('/');
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.userProfile}>
        <div className={styles.profilePic} />
        <div>
          <div className={styles.profileName}>{user.name || 'No Name'}</div>
          <div className={styles.profileEmail}>{user.email || 'No Email'}</div>
          <div className={styles.dateJoined}>Joined: {user.dateJoined}</div>
        </div>
      </div>

      <div className={styles.donationSection}>
        <h2 className={styles.center}>Your Donation History</h2>
        {donations.length > 0 ? (
          donations.map(donation => (
            <div key={donation.id} className={styles.donationHistoryItem}>
              <span className={styles.donationAmount}>${donation.amount}</span>
              <span>Date: {donation.date}</span>
            </div>
          ))
        ) : (
          <div className={styles.donationHistoryItem}>
            <p>You have not made any donations yet.</p>
          </div>
        )}
        <a href="/donate" className={styles.donateButton}>Make a Donation</a>
      </div>

      <div className={styles.eventsSection}>
        <h2 className={styles.center}>RSVP'd Events</h2>
        {rsvpedEvents.length > 0 ? (
          rsvpedEvents.map(event => (
            <div key={event.id} className={styles.eventItem}>
              <span className={styles.eventName}>{event.title}</span>
              <button onClick={handleViewEvents} className={styles.eventButton}>View</button>
            </div>
          ))
        ) : (
          <p>No events registered now.</p>
        )}
      </div>

      <div className={styles.notificationPanel}>
        <h2 className={styles.center}>Notifications</h2>
        <div className={styles.notificationItem}>
          <p>Thank you for your recent donation!</p>
        </div>
      </div>

      <button onClick={handleSignOut} className={styles.donateButton}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
