import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from '../../styles/ProgressBar.module.css';


const ProgressBar = ({ progress }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, 
  });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timeoutId = setTimeout(() => {
        setWidth(progress);
      }, 300); 
      return () => clearTimeout(timeoutId);
    }
  }, [inView, progress]);

  return (
    <div
      className={styles.progressBar}
      ref={ref}
      aria-valuenow={width}
      aria-valuemin="0"
      aria-valuemax="100"
      role="progressbar"
    >
      <div className={styles.progress} style={{ width: `${width}%` }}></div>
      <div className={styles.hoverEffect} />
      <span className={styles.progressText}>{width}%</span>
    </div>
  );
};

export default ProgressBar;