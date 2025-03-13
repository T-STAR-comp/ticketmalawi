import React from 'react';
import styles from './special.module.css';

const BlueGalaxy = () => {
  const createStars = () => {
    const stars = [];
    for (let i = 0; i < 500; i++) {
      stars.push(<div key={i} className={styles.star}></div>);
    }
    return stars;
  };

  const createShootingStars = () => {
    const shootingStars = [];
    for (let i = 0; i < 15; i++) {
      shootingStars.push(<div key={i} className={styles.shootingStar}></div>);
    }
    return shootingStars;
  };

  return (
    <div className={styles.universeContainer}>
      {createStars()}
      {createShootingStars()}
      <div className={styles.planet}>
        <div className={styles.moon}></div>
        <div className={styles.moon}></div>
        <div className={styles.moon}></div>
      </div>
      <div className={styles.largeNebula}></div>
      <div className={styles.distantGalaxy}></div>
    </div>
  );
};

export default BlueGalaxy;
