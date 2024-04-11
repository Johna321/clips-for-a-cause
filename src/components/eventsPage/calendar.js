import React, { useState } from 'react';
import styles from '../../styles/calendar.module.css';


const eventsData = [
    {
        id: 1,
        title: 'Haircut Marathon for Charity',
        date: new Date(Date.now() + 86400000).toISOString(),
        type: 'upcoming',
        description: 'A marathon event for haircuts. Get a fresh new look and support a charitable cause!',
        attendance: 'Limited slots available',
        fundsraised: 'To be determined',
        image: '/cctransparent.png',
    },
    {
        id: 2,
        title: 'Charity Styling Session',
        date: new Date(Date.now() + 172800000).toISOString(),
        type: 'upcoming',
        description: 'Get a professional styling session and support a charitable cause!',
        attendance: 'Limited slots available',
        fundsraised: 'To be determined', 
        image: '/cctransparent.png',
    },
    {
        id: 3,
        title: 'Barber Battle for Charity',
        date: new Date(Date.now() + 259200000).toISOString(),
        type: 'upcoming',
        description: 'Witness the best barbers compete and help raise funds for a good cause!',
        attendance: 'Tickets required',
        fundsraised: 'To be determined', 
        image: '/cctransparent.png',
    },
    {
        id: 4,
        title: 'Charity Hair Show',
        date: new Date(Date.now() - 86400000).toISOString(),
        type: 'past',
        description: 'A showcase of creative hairstyles to raise funds for charity!',
        attendance: 'Tickets required',
        fundsraised: '$2000',
        image: '/cctransparent.png',
    },
    {
        id: 5,
        title: 'Stylist Workshop for a Cause',
        date: new Date(Date.now() - 172800000).toISOString(),
        type: 'past',
        description: 'Learn new styling techniques while supporting a charitable cause!',
        attendance: 'Tickets required',
        fundsraised: '$5000',
        image: '/cctransparent.png',
    }
];

const Calendar = () => {
    const [events] = useState(eventsData);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleEventClick = (event) => {
        setSelectedEvent(event);
    };

    return (
        <div className={styles.calendar}>
            <div className={styles.eventsColumn}>
                <div>
                    <h2 className={styles.calendarHeader}>Upcoming Events</h2>
                    {events.filter(event => new Date(event.date) > new Date())
                            .map(event => (
                                <EventItem key={event.id} event={event} onClick={handleEventClick} />
                            ))}
                </div>

                <div>
                    <h2 className={styles.calendarHeader}>Past Events</h2>
                    {events.filter(event => new Date(event.date) <= new Date())
                            .map(event => (
                                <EventItem key={event.id} event={event} onClick={handleEventClick} />
                            ))}
                </div>
            </div>             

            <div className={styles.detailsPanel}>
                {selectedEvent ? (
                    <div>
                        <h3 className={styles.eventDetailTitle}>{selectedEvent.title}</h3>
                        <p className={styles.eventDetailText}><strong>Date:</strong> {new Date(selectedEvent.date).toLocaleDateString()}</p>
                        <p className={styles.eventDetailText}><strong>Description:</strong> {selectedEvent.description}</p>
                        <p className={styles.eventDetailHighlight}><strong>Attendance:</strong> {selectedEvent.attendance}</p>
                        <p className={styles.eventDetailHighlight}><strong>Funds Raised:</strong> {selectedEvent.type === 'upcoming' ? 'To be determined' : selectedEvent.fundsraised}</p>
                        <img src={selectedEvent.image} alt={selectedEvent.title} className={styles.eventDetailImage} />
                    </div>
                ) : (
                    <p>Select an event to see the details</p>
                )}
            </div>
        </div>
    );
}

const EventItem = ({ event, onClick }) => (
    <div className={event.type === 'upcoming' ? styles['event'] : styles['past-event']} onClick={() => onClick(event)}>
        <span className={styles['event-icon']}>&#128197;</span>
        <span className={styles['event-title']}>{event.title}</span>
        <span className={styles['event-date']}>{new Date(event.date).toLocaleDateString()}</span>
    </div>
);

export default Calendar;
