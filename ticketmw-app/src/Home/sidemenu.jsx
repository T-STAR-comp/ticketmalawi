import style from './styles/sidemenu.module.css'
import {Link, Outlet} from 'react-router-dom'
// icons import
import insta from '../assets/icons/instagram.svg'
import twitter from '../assets/icons/twitter-alt.svg'
import whatsapp from '../assets/icons/whatsapp.svg'
import call from '../assets/icons/phone-call.svg'
import close from '../assets/icons/close_FILL0_wght400_GRAD0_opsz24.svg'
//fin

function Sidemenu (props){
    return(
        <div className={style.Sidemenu}>
            <img onClick={props.closemen} className={style.closeBtn} src={close} alt="close icon" />

            <div className={style.link_container}>
                <Link to="about" className={style.LK}><p className={style.links}>ABOUT US</p></Link>
                <Link to="contact" className={style.LK}><p className={style.links}>CONTACT US</p></Link>
                <Link to="/membersPage" className={style.LK}><p className={style.links}>MEMBERS PAGE</p></Link>
            </div>
            <Outlet/>
            <div className={style.bottom_container}>
                <div className={style.headtittles}>
                    <p className={style.firstht}>Ticket Malawi</p>
                    <p className={style.secondht}>Lets Connect</p>
                </div>
                <div className={style.social_media_icons}>
                <img className={style.mediaI} src={insta} alt="icon" width='25px' height='25px' />
                <img className={style.mediaI} src={twitter} alt="icon" width='25px' height='25px' />
                <img className={style.mediaI} src={whatsapp} alt="icon" width='25px' height='25px' />
                <img className={style.mediaI} src={call} alt="icon" width='25px' height='25px' />
            </div>
            <div className={style.info_container}>
                <Link className={style.LK}><p className={style.bottomLinks}>AML policy</p></Link>
                <Link className={style.LK}><p className={style.bottomLinks}>Purchase policy</p></Link>
                <p className={style.Btxt}>manage my cookies and choices</p>
            </div>
            </div>
        </div>
    )
}

export default Sidemenu;