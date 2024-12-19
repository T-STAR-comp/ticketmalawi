import React from "react";
import styles from './styles/maintanance.module.css';

const MaintenancePage = (props) => {
    return (
      <div className={styles.maintenance_page}>
        <div className={styles.content}>
          <div className={styles.icon}>
            <div className={styles.gear}></div>
          </div>
          <h1></h1>
          <p>
          {props.msg}
          </p>
        </div>
      </div>
    );
  };
  
  export default MaintenancePage;
