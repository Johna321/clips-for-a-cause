import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from '../../styles/ProgressBar.module.css';

const ProgressBar = ({ progress }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, 
  });
  const [width, setWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    if (inView) {
      setWidth(progress);
    }
  }, [inView, progress]);

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsHovered(false);
    }, 1250); // delay in milliseconds
    setTimeoutId(id);
  };

  return (
    <div
      className={styles.progressBar}
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.progress} style={{ width: `${width}%` }}></div>
      {isHovered && (
        <div className={styles.hoverText}>
          {width}% towards our next milestone!
        </div>
      )}
    </div>
  );
};

export default ProgressBar;