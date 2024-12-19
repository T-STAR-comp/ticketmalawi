import React from "react";
import styles from './styles//template.module.css';
//import qrcode from '../assets/TicketMalawiTicket2 (1).jpg'

const Template = ({ EventName, TicketHolder,TicketType, uniqueIdentifier, EventDate, EventTime, Venue, qrCodeDataURL}) => {
  return (
    <div id="ticket" className={styles.ticketContainer}>
      <div className={styles.ticketHeader}>
        <h1 className={styles.eventName}>{EventName}</h1>
        <span className={styles.ticketId}>#{uniqueIdentifier}</span>
      </div>
      <div className={styles.ticketBody}>
        <div className={styles.ticketDetails}>
          <p><strong>Holder:</strong> {TicketHolder}</p>
          <p><strong>Date:</strong> {EventDate}</p>
          <p><strong>Venue:</strong> {Venue}</p>
          <p><strong>Type:</strong> {TicketType}</p>
        </div>
        <div className={styles.qrCode}>
          <img src={qrCodeDataURL} alt="QR Code" className={styles.qrImage} />
        </div>
      </div>
      <div className={styles.ticketFooter}>
        <p>Powered by OASIS TECH</p>
      </div>
    </div>
  );
};

export default Template;