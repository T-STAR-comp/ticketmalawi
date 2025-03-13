import style from './styles/eventDisp.module.css'

function EventDisp(props) {
    return (
        <div className={style.main_cont}>
            <div className={style.discription_cont}>
                <img className={style.image} src={props.image} alt="event poster" width='auto' height='auto' />
                <div className={style.location_name_cont}>
                    <p className={style.date_location}>{props.date1} </p>
                    <p className={style.deviders}>||</p>
                    <p className={style.event_name}> {props.eventname}</p>
                </div>
                <p className={style.event_desc}>{props.eventdescription}</p>
                <a href="#buyTickets">
                    <button className={style.buy_btn}>Buy Tickets</button>
                </a>
            </div>
            {/*end of desc area*/}

            <div className={style.time_location}>
                <h1 className={style.head}>Time & Location</h1>
                <p className={style.TL_details}>
                    {props.date2}, {props.time} {props.venue},{props.location}
                </p>
            </div>

            <hr />
            <div className={style.ticket_container}>
                <h1 className={style.time_location}>Tickets</h1>

                {/*ticket_container*/}
                <div id='buyTickets' className={style.ticket_cont}>{/*standard*/}
                    <div className={style.ticket_desc}>
                        {props.standardChecked}
                        <h2 className={style.ticket_type}>standard</h2> <p>|</p>
                        <h2 className={style.price_sty}>MWk {props.standardprice}</h2>
                    </div>

                    <div className={style.ticket_inputs}>
                        <p className={style.txt}>Number of tickets</p>
                        {props.standardNumTickets}{/*standard number of tikets input*/}
                    </div>
                </div>

                <div className={style.ticket_cont}>{/*vip*/}
                    <div className={style.ticket_desc}>
                        {props.vipChecked}
                        <h2 className={style.ticket_type}>VIP</h2> <p>|</p>
                        <h2 className={style.price_sty}>MWk {props.vipprice}</h2>
                    </div>

                    <div className={style.ticket_inputs}>
                        <p className={style.txt}>Number of tickets</p>
                        {props.vipNumTickets}{/*vip number of tikets input*/}
                    </div>
                </div>

                {props.errorMsg}
                
                {/*end of ticket_container*/}
            </div>
            <hr />
            <div className={style.bottom_cont}>
                
                <button className={style.buy_btn} onClick={props.checkout}>Check Out</button>
            </div>

            <div className={style.footer}>
                &copy; 2024 Ticket Malawi | <a href="/bluegalaxy" target="_blank">ticketstar/malawi.webstar.co</a>
            </div>
        </div>
    );
}

export default EventDisp;