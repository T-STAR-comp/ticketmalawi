import style from './404.module.css'
import {Link,Outlet} from 'react-router-dom'

function NotFound(){
    return(
        <div className={style.main_cont}>
            
            <p className={style.errMsg}>Error 404</p>
            <p className={style.notFound}>page not found</p>
            <p className={style.link}>Go to <Link to='/'>HomePage</Link></p>
            <Outlet/>
        </div>
    )
}

export default NotFound;