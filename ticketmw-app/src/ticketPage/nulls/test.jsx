import React from "react";
import Ticket from "../template";
import { toPng } from "html-to-image";
import qrcode from '../assets/TicketMalawiTicket2 (1).jpg'

const Test = () => {
  // Array of ticket data for multiple tickets
  const ticketsData = [
    {
      eventName: "Music Fest 2024",
      holderName: "Jane Smith",
      ticketId: "67890XYZ",
      eventDate: "2024-12-10",
      eventTime: "6:00 PM",
      venue: "Central Park",
      qrCodeUrl: qrcode,
    },
    {
      eventName: "Art Expo 2024",
      holderName: "John Doe",
      ticketId: "12345ABC",
      eventDate: "2024-12-15",
      eventTime: "3:00 PM",
      venue: "Downtown Gallery",
      qrCodeUrl: qrcode,
    },
    {
      eventName: "Tech Conference 2024",
      holderName: "Alice Johnson",
      ticketId: "98765LMN",
      eventDate: "2024-12-20",
      eventTime: "10:00 AM",
      venue: "Convention Center",
      qrCodeUrl: qrcode,
    },
  ];


  // Function to download all tickets
  const downloadAllTickets = () => {
    ticketsData.forEach((ticket) => {
      const ticketElement = document.getElementById(`ticket-${ticket.ticketId}`);
      if (ticketElement) {
        toPng(ticketElement)
          .then((dataUrl) => {
            const link = document.createElement("a");
            link.href = dataUrl;
            link.download = `${ticket.ticketId}.png`;
            link.click();
          })
          .catch((error) => {
            console.error(`Error generating image for ticket ${ticket.ticketId}:`, error);
          });
      }
    });
  };

  return (
    <div>
      {/* Render all tickets */}
      {ticketsData.map((ticket, index) => (
        <div key={index} id={`ticket-${ticket.ticketId}`}>
          <Ticket {...ticket} />
        </div>
      ))}
      {/* Single button to download all tickets */}
      <button onClick={downloadAllTickets}>
        Download All Tickets
      </button>
    </div>
  );
};

export default Test;
