import React, { useState } from 'react';
import Calendar from '../src/components/eventsPage/calendar';
import styles from '../src/styles/calendar.module.css';

const EventsPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <Calendar />
      </main>
    </div>
  );
};

export default EventsPage;
