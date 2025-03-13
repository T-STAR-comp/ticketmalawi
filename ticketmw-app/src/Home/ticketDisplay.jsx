import style from './styles/ticketDisplay.module.css'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';
import TicketCont from './ticketCont.jsx'
import UseFetch from '../APIDATA/dataApi.js';

function TicketDisplay(){
        // Get data
    const[Events, SetEvents] = useState([]);
    const[Error, SetError] = useState(false);
    const[Loading, SetLoading] = useState(true);

    const refresh = () => {
        location.reload();
    }

    const GetData = async()=>{
        try {
            const res = await fetch (import.meta.env.VITE_eventdataurl);
            const data = await res.json();

            if(data){
                SetEvents(data);
            };
        }
        catch(err){
            if(err){
                SetError(true);
            }
        }
        finally{
            SetLoading(false);
        }
    };
    
    useEffect(() => {
        GetData();
    }, []);

    if(Loading === true){
        return(     
            <div className={style.loader}>
            <div></div>
            <div></div>
            <div></div>
            </div>)
    }

    if(Error === true){
        return(
            <div className={style.Error_cont_main}>
                <div className={style.text_div}>Could Not Fetch Events</div>
                <p onClick={refresh} className={style.refresh_link}>Refresh</p>
            </div>
        )
    }
    
    return(
        <><div className={style.main_container} >
            {Events.map((Event)=> (
                <TicketCont
                view={Event.Status === 0 ? 'none': null}
                image={Event.ImageURL}
                date={Event.FirstDate}
                name={Event.EventName}
                button={<Link to={Event.EventURL}><button className={style.buy_btn}>Buy Tickets</button></Link>}
                 />
            ))}
            </div>
        </>
    )
}

export default TicketDisplay;