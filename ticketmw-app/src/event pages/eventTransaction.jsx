import style from './styles/transactiondisp.module.css'

function TransDisp(props){
    return(
        <div className={style.main_cont}>
            <div className={style.total_cont}>
                    <h2 className={style.total_hed}>Total</h2>
                    <p className={style.total_txt}>MWk {props.total}</p>
                </div>
            <div className={style.Trans_deatails_inputs}>
                {props.email}
                {props.FirstName}
                {props.LastName}
                
            </div>
            <button onClick={props.funct} className={style.cont_btn}>Continue</button>
        </div>
    )
}

export default TransDisp;