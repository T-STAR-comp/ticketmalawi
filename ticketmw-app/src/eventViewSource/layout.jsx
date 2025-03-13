import style from './general.module.css';
import UseFetch from '../APIDATA/dataApi.js';
import React from 'react';
import { generateQRCodes } from '../APIDATA/qrServiceAPI.js';
import EventDisp from '../event pages/eventDisp.jsx';
import TransDisp from '../event pages/eventTransaction.jsx';
import errorIcon from '../assets/icons/error_.svg';
import close from '../assets/icons/close_FILL0_wght400_GRAD0_opsz24.svg';
import {Link, Outlet } from 'react-router-dom';
import { useState} from 'react';

const LayOut = (props) => {
    
    const { data, loading, error } = UseFetch(import.meta.env.VITE_eventdataurl);
    // State variables
    const [displayStyle, setDisplayStyle] = useState({ display: 'none' });
    const [errMsg, setErrMsg] = useState({display:'none'});
    const [selectedOption, setSelectedOption] = useState('');
    const [email, setEmail] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [stdInput, setStdInput] = useState(0);
    const [vipInput, setVipInput] = useState(0);
    const [total, setTotal] = useState(0);
    const [Loading, SetLoading] = useState(false);

    // fetch specific event info
    const EventInfo = props.eventdata? props.eventdata : null;
    
    function openPayment() {
        if (vipInput !== 0 && vipInput <= 5 || stdInput !== 0 && stdInput <= 5 ) {
            setDisplayStyle({ display: 'flex'});
        }
        calculateTotal();
        if(vipInput > 5 || stdInput > 5){
            setErrMsg({display:'flex'});
        }
    }

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handlePayment = async () => {
        
        //
        const paymentData = {
            amount: total,
            currency: "MWK",
            email: email,
            first_name: FirstName,
            last_name: LastName,
            callback_url: `${import.meta.env.VITE_homeURL}/ticketmalawi/getticket/page`,
            return_url: `${import.meta.env.VITE_homeURL}/PaymentError/ticketmalawi`,
            tx_ref: Math.floor(Math.random() * 1000000000) + 1,
            customization: {
                title: EventInfo.EventName,
                description: "Payment for ticket for ticket purchase"
            },
            meta: {
                uuid: "uuid",
                response: "success"
            }
        };
    
        try {

            if(email,FirstName,LastName != ''){
                SetLoading(true);

                const response = await fetch(import.meta.env.VITE_PaymentURL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(paymentData)
                });
        
                const responseData = await response.json();
                
                if (responseData.status === "success"){
                    window.location.href = responseData.data.checkout_url;
                    sessionStorage.setItem('transactionID',responseData.data.data.tx_ref);
                    handleQrcreation();
                    update_DB();

                    //if the response is a success the customer will be redirected
                    //to the paychangu payment page at the same time the ticket will be 
                    //made then when the transaction is a success the customer will
                    //be redirected to the ticket page xoxo
                }
                if(response.status === 500){
                    window.location.href = `${import.meta.env.VITE_homeURL}/PaymentError/ticketmalawi`;
                }
               
            }
            else if(email,FirstName,LastName === ''){
                window.alert('please fill in your details!');
            }

        } catch (err) {
            if(err.response && err.response.status === 429){
                window.alert('Too many requests try again later');
            }
        }
    };

    const update_DB = async () =>{

        const identifier1 = EventInfo.StandardBaseID;
        const identifier2 = EventInfo.VipBaseID;

        const numQRcodes = stdInput + vipInput;  
        const baseIdentifier = selectedOption ==='standard'? identifier1 : identifier2;

        const information = {
            email: email,
            first_name:FirstName,
            last_name:LastName,
            amount:total,
            ticket_UID:baseIdentifier,
            total_tickets:numQRcodes,
        }

        try{
            
        const response = await fetch(import.meta.env.VITE_updateDBURL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(information)
        })
        console.log(information)
        const data = await response.json();
        if (data){
            SetLoading(false);
        }

        }
        catch(err){
            if(err.response && err.response.status === 429){
                window.alert('Too many requests try again later');
            }
        }

    }


    const handleQrcreation = async () => {
        //storing each unique base identifier in its own var
        const identifier1 = EventInfo.StandardBaseID;
        const identifier2 = EventInfo.VipBaseID;
        const EventName = EventInfo.EventName;
        const TicketHolder = `${FirstName} ${LastName}`;
        const EventTime = EventInfo.Time;
        const EventDate = EventInfo.SecondDate;
        const Venue = EventInfo.Venue;
        const TicketType = selectedOption === 'standard'? 'STANDARD' : 'VIP';

        const numQRcodes = stdInput + vipInput;  
        const baseIdentifier = selectedOption ==='standard'? identifier1 : identifier2;
        
        const url = import.meta.env.VITE_createTicket;
        
        try {
            const data = await generateQRCodes(url, numQRcodes, baseIdentifier,EventName,TicketHolder,EventTime,TicketType,EventDate,Venue);

            sessionStorage.setItem(import.meta.env.VITE_setItem, JSON.stringify(data));
          
        }
        catch (err) {
            if(err.response && err.response.status === 429){
                window.alert('Too many requests try again later');
            }
        }
    }

    function calculateTotal() {
        const stdTotal = EventInfo.StandardPrice * stdInput;
        const vipTotal = EventInfo.VipPrice * vipInput;
        const totalAmount = stdTotal + vipTotal;

        setTotal(Number(totalAmount));
    }

    function stdChange(event) {
        setStdInput(Number(event.target.value));
    }

    function vipChange(event) {
        setVipInput(Number(event.target.value));
    }

    function getEmail(event) {
        setEmail(event.target.value);
    }

    function getFirstName(event) {
        setFirstName(event.target.value);
    }

    function getLastName(event) {
        setLastName(event.target.value);
    }
    //
    if (loading) return(     
    <div className={style.loader}>
    <div></div>
    <div></div>
    <div></div>
    </div>)
    //
    if (error) return(
    <div>
    <div className={style.loader}>
    <p>{error.message}</p>
    </div>
    <img className={style.errIcon} src={errorIcon} alt="error icon" />
    </div>)
    //

    if (!EventInfo) return <div className={style.loader}>No event data available</div>;

    if(Loading) {
        return(     
            <div className={style.loader}>
            <div></div>
            <div></div>
            <div></div>
            </div>)
    }

    return (
        <div className={style.main_cont}>
            
            <div style={displayStyle}>
                <TransDisp
                    total={total}
                    email={<input className={style.pay_input} value={email} onChange={getEmail} type="text"  placeholder='Your Email' />}
                    FirstName={<input className={style.pay_input} value={FirstName} onChange={getFirstName} type="text"  placeholder='First name' />}
                    LastName={<input className={style.pay_input} value={LastName} onChange={getLastName} type="text"  placeholder='Last Name' />}
                    funct={handlePayment}
                />
            </div>

            <div className={style.head}>
                <p className={style.headtxt}>Buy Tickets</p>
                <Link to='/'><img className={style.close} src={close} alt="close" /> </Link>
            </div>
            <Outlet />

            {/* Resources to be fetched from server */}
            <EventDisp
                image={EventInfo.ImageURL}
                date1={EventInfo.FirstDate}
                venue={EventInfo.venue}
                eventname={EventInfo.EventName}
                eventdescription={EventInfo.EventDesc}
                date2={EventInfo.SecondDate}
                time={EventInfo.Time}
                location={EventInfo.Location}
                standardprice={EventInfo.StandardPrice}
                vipprice={EventInfo.VipPrice}
                standardChecked={<input className={style.radio} onChange={handleOptionChange} checked={selectedOption === 'standard'} type='radio' value='standard' />}
                vipChecked={<input className={style.radio} onChange={handleOptionChange} checked={selectedOption === 'vip'} type='radio' value='vip' />}
                standardNumTickets={<input value={stdInput} onChange={stdChange} className={style.input} type="number" name='standard_price' min='0' max='5' />}
                vipNumTickets={<input value={vipInput} onChange={vipChange} className={style.input} type="number" name='vip_price' min='0' max='5' />}
                errorMsg={<p style={errMsg} className={style.err_msg_txt}>Must be Less than 6 tickets per download</p>}
                checkout={openPayment}
            />
            
    </div>
        
    );
}

export default LayOut;
