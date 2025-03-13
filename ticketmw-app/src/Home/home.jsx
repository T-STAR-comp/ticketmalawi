import style from './styles/home.module.css'
import Nav from '../assets/icons/nav.svg'
import Sidemenu from './sidemenu.jsx'
import LineMenu from './lineMenu.jsx'
import TicketDisplay from './ticketDisplay.jsx'
import { useState } from 'react'

function Home() {
    const [styling, newStyle] = useState({display:"none"})
    //open & close sidemenu
    function opensidemenu(){
        newStyle(n=>n={display:"flex"})
    }
    function closesidemenu(){
        newStyle(n=>n={display:"none"})
    }
    //fin
    

    return(
        <div className={style.mainbody}>
                <div style={styling}><Sidemenu closemen={closesidemenu}c/></div>
                
                <div className={style.head}>
                    <div className={style.headBar}>
                        <p className={style.headtxt}>Get Your E-Ticket Today</p>
                    </div>
                    <div className={style.tittle_nav}>
                        <p className={style.tittle}>Ticket Malawi</p>
                        <div className={style.line_menu}><LineMenu/></div>
                        <img onClick={opensidemenu} className={style.NavHumburger} src={Nav} alt="Navigation Icon"/>
                    </div>
                    <p className={style.upcomingtxt}>Upcoming Events</p>
                </div>

                <div className={style.TicketDisplay}>
                    <TicketDisplay/>
                </div>
                
            </div>
    )
}

export default Home;