import styles from '../Error/transfailed.module.css';
import { Link, Outlet } from 'react-router-dom';
import errorIcon from '../assets/icons/error_.svg';

function PaymentError() {

    return(
        <div className={styles.main_div}>
            <img src={errorIcon} alt='errorIcon' height='100px' width='100px' />
            <p className={styles.error_Text}>PAYMENT ERROR</p>
            <p className={styles.error_Text_2}>There was an error processing the payment</p>
            <p className={styles.error_Text_2}>return to  <Link to='/'>HomePage</Link></p>
            <Outlet/>
         </div>
    )
}

export default PaymentError;