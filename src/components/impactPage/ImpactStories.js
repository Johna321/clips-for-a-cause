import React from 'react';
import styles from '../../styles/ImpactStories.module.css'; // Ensure you have this CSS file for styling


const impactStoriesData = [
  {
    id: 1,
    content: '"Thanks to the free haircut services, I felt confident to attend job interviews. It was a fresh start for me."',
    author: 'Jordan, Beneficiary',
    image: '1.jpg'  // Assumed to be directly in the public folder
  },
  {
    id: 2,
    content: '"Volunteering with Clips for a Cause showed me the power of community. I have been doing more community service feeling and looking a lot better. hehe"',
    author: 'Alex, Volunteer Barber',
    image: '3.jpg'  // Assumed to be directly in the public folder
  },
  {
    id: 3,
    content: '"I was able to get a free haircut and styled for my prom. It was a great experience and I felt like a million bucks. Thank you Clips for a Cause!"',
    author: 'Sam, Beneficiary',
    image: '2.jpg'  // Assumed to be directly in the public folder
  },
];

const ImpactStories = () => {
  return (
    <div className={styles.storiesContainer}>
      <h2 className={styles.storiesTitle}>Impact Stories</h2>
      <div className={styles.storiesGrid}>
        {impactStoriesData.map((story) => (
          <div key={story.id} className={styles.storyCard}>
            <div className={styles.storyContent}>
              <h3 className={styles.storyTitle}>{story.content}</h3>
              <p className={styles.author}>- {story.author}</p>
            </div>
            <div className={styles.storyImage} style={{ backgroundImage: `url(/${story.image})` }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactStories;
