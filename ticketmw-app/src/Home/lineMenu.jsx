import style from './styles/home.module.css'
import { Link,Outlet } from 'react-router-dom';

function LineMenu(){

    return(
        <div className={style.Line_men_cont}>
            <Link className={style.link} to='/'><p className={style.line_links}>Home</p></Link>
            <Link className={style.link} to='about'><p className={style.line_links}>About Us</p></Link>
            <Link className={style.link} to='contact'><p className={style.line_links}>Contact</p></Link>
            <Link className={style.link} to='/membersPage'><p className={style.line_links}>Members Page</p></Link>
            <Outlet/>
        </div>   
    )
}

export default LineMenu;