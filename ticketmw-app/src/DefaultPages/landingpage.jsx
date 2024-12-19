import React from "react";
import styles from './styles/landingpage.module.css';

const LandingPage = () => {
  return (
    <div className={styles.landing_page}>
      <div className={styles.content}>
        <h1>Ticket Malawi</h1>
        <p>The website will be up soon.</p>
        <div className={styles.spinner}></div>
      </div>
      <footer className={styles.footer}>
        Powered by <span className={styles.brand}>Oasis</span>
      </footer>
    </div>
  );
};

export default LandingPage;
