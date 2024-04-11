import React from 'react';
import styles from '../../styles/ImpactStories.module.css'; // Assume you have this CSS file for styling

const impactStoriesData = [
  {
    id: 1,
    title: 'A Fresh Start',
    content: 'Thanks to the free haircut services, I felt confident to attend job interviews. It was a fresh start for me.',
    author: 'Jordan, Beneficiary'
  },
  {
    id: 2,
    title: 'Community Love',
    content: 'Volunteering with Clips for a Cause showed me the power of community. It’s amazing to see the direct impact we can make.',
    author: 'Alex, Volunteer Barber'
  },
  {
    id: 3,
    title: 'Beyond a Haircut',
    content: 'The haircut I received was more than just a service; it was an act of kindness that lifted my spirits during a tough time.',
    author: 'Sam, Beneficiary'
  },
  // Add more stories as needed
];

const ImpactStories = () => {
  return (
    <div className={styles.storiesContainer}>
      <h2>Impact Stories</h2>
      <div className={styles.storiesGrid}>
        {impactStoriesData.map((story) => (
          <div key={story.id} className={styles.storyCard}>
            <h3>{story.title}</h3>
            <p>{story.content}</p>
            <p className={styles.author}>- {story.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactStories;
