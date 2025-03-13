import style from './contact.module.css';
import { Link, Outlet } from 'react-router-dom';
// icons import
import close from '../assets/icons/close_FILL0_wght400_GRAD0_opsz24.svg';
//fin

import { useState } from 'react';

function Contact() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const SendMsg = () => {
        window.location.reload();
    }

    const sendMessage = async () => {

        const information = {
            email:email,
            firstName:firstName,
            lastName:lastName,
            message:message,
        }

        if(email,firstName,lastName,message != ''){
            try{
                const response = await fetch('url',{
                    method: 'POST',
                    headers: {
                        'authorization':'content-type'
                    },
                    body: JSON.stringify(information)
                });

                const data = await response.json();
                {data}
                if(data.response === 'success'){
                    window.location.href = `/`;
                }
            }
            catch(err){
                //console.log(err);
            }
        }
    }

    return (
        <div className={style.main_conatiner}>

            <p className={style.head}>Ticket Malawi</p>
            <Link to='/'><img className={style.close} src={close} alt="close image" /></Link>
            <Outlet/>

            <p className={style.main_txt}>Contact Us</p>

            <div className={style.main_cont}>
                <input
                    className={style.input_txt}
                    type="text"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    minLength="0"
                    maxLength="30"
                />

                <input
                    className={style.input_txt}
                    type="text"
                    required
                    placeholder="First Name"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    minLength="0"
                    maxLength="30"
                />

                <input
                    className={style.input_txt}
                    type="text"
                    required
                    placeholder="Last Name"
                    value={lastName}
                    onChange={handleLastNameChange}
                    minLength="0"
                    maxLength="30"
                />

                <textarea
                    className={style.textarea_inpu}
                    name="input"
                    id="input_area"
                    placeholder="Type your message"
                    value={message}
                    onChange={handleMessageChange}
                    minLength="0"
                    maxLength="300"
                ></textarea>

                {/*<button onClick={SendMsg} className={style.send_btn}>Send</button>*/}
            </div>

            <div className={style.footer}>
                &copy; 2024 Ticket Malawi | <a href='/bluegalaxy' target="_blank">ticketstar/malawi.webstar.co</a>
            </div>
        </div>
    );
}

export default Contact;
