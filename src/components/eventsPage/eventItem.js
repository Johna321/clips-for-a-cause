import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/calendar.module.css';
import { useGlobalStore } from '../../utils';

const EventItem = ({ event, onClick }) => {
    const router = useRouter();
    const authenticated = useGlobalStore(state => state.authenticated);
    const [rsvp, setRsvp] = useState(event.rsvp);

    const handleRSVP = (e) => {
        e.stopPropagation(); // Prevent triggering the event detail view when clicking RSVP

        if (!authenticated) {
            router.push('/login');
        } else {
            setRsvp(!rsvp);
        }
    };

    return (
        <div className={event.type === 'upcoming' ? styles.event : styles['past-event']} onClick={() => onClick(event)}>
            <span className={styles['event-icon']}>&#128197;</span>
            <span className={styles['event-title']}>{event.title}</span>
            <span className={styles['event-date']}>{new Date(event.date).toLocaleDateString()}</span>
            {event.type === 'upcoming' && (
                <button onClick={handleRSVP} className={rsvp ? styles.checkmark : styles.button}>
                    {rsvp ? '✓ RSVP' : 'RSVP'}
                </button>
            )}
        </div>
    );
};

export default EventItem;
