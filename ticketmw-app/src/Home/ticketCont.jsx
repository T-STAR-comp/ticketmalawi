import style from './styles/TicketCont.module.css'

function TicketCont(props){
    return(
        <div style={{display:props.view}} className={style.ticket_container}>
            <img className={style.event_poster} src={props.image} loading='lazy' alt="event poster" height='auto' width='auto' />
            <div className={style.event_D_cont}>
            <p className={style.event_details}>{props.date}</p>
            <p className={style.event_details}>{props.name}</p>
            </div>
            {props.button}
        </div>
    )
}

export default TicketCont;