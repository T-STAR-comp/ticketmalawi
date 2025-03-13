import React, { useState, useEffect } from "react";
import Ticket from "../ticketPage/template";
import { toPng } from "html-to-image";
import style from "./styles/ticketpage.module.css";

function TicketPage() {
  const [ticketsData, setticketsData] = useState([]); // Initialize as an empty array
  const [downloadbtn, setdownloadbtn] = useState({display:'flex'});
  const [donebtn, setdonebtn] = useState({display:"none"});

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem(import.meta.env.VITE_setItem));
    if (data) {
      setticketsData(data);
    }
  }, []);

  const SendUIDdata = async () => {

    ticketsData.forEach( async (ticket) => {

      let UidValue = ticket.uniqueIdentifier;

      const res = await fetch(import.meta.env.VITE_TicketUIDSendURL,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({UidValue})
      });

      const data = await res.json();

    });
  };

  const Verifytransaction = async() =>{

    const data = {
      trans_ID:sessionStorage.getItem('transactionID')
    }

    try{
      const res = await fetch(import.meta.env.VITE_verifyPaymentURL,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const info = await res.json();
      
      if(info.status === 'ok'){
        downloadAllTickets();
      }

    }
    catch(err){
      console.log(err);
    }
    finally{
      setdownloadbtn({display:'none'});
      setdonebtn({display:"flex"});
    }
  };

  // Function to download all tickets
  const downloadAllTickets = () => {
    try{

      ticketsData.forEach((ticket) => {
        const ticketElement = document.getElementById(`ticket-${ticket.uniqueIdentifier}`);
        if (ticketElement) {
          toPng(ticketElement)
            .then((dataUrl) => {
              const link = document.createElement("a");
              link.href = dataUrl;
              link.download = `${ticket.uniqueIdentifier}.png`;
              link.click();
            })
            .catch((error) => {
              window.alert(`Error generating image for ticket `);
            });
        }
      });
      SendUIDdata();
    }
    catch(err){
      null
    }
    finally{
      sessionStorage.removeItem(import.meta.env.VITE_setItem);
      sessionStorage.removeItem('transactionID');
    }
    };

    const CleanUp = () => {
      window.location.href = '/';
      sessionStorage.removeItem(import.meta.env.VITE_setItem);
      sessionStorage.removeItem('transactionID');
    }

  return (
    <div>
      <p className={style.head_txt}>Ticket Malawi</p>
      <p className={style.maintxt}>Download your Tickets below</p>

      <div>
        {/* Render all tickets */}
        {ticketsData.length > 0 ? (
          ticketsData.map((ticket, index) => (
            <div key={index} id={`ticket-${ticket.uniqueIdentifier}`}>
              <Ticket {...ticket} />
            </div>
          ))
        ) : (
            <div className={style.loader}>
            <div></div>
            <div></div>
            <div></div>
            </div>
        )}
        {/* Single button to download all tickets */}
        {ticketsData.length > 0 && (
          <button onClick={Verifytransaction} className={style.downloadBtn} style={downloadbtn} >Download tickets</button>
        )}
        <button onClick={CleanUp} className={style.downloadBtn} style={donebtn} >Done</button>
      </div>
    </div>
  );
}

export default TicketPage;
