import { useState } from 'react';
import styles from './style.module.css';
import { Link, Outlet } from 'react-router-dom';

function MembersPage() {
    // State to store the input values
    const [ptnCode, setPtnCode] = useState('');
    const [password, setPassword] = useState('');
    const[Redirect, SetRedirection] = useState(false);

    //redirect to homepage
    const homePageRed = () =>{
        window.location(import.meta.env.VITE_homeURL);
    }

    // Function to handle changes in the PTN Code input
    const handlePtnCodeChange = (event) => {
        setPtnCode(event.target.value);
    };

    // Function to handle changes in the Password input
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };


    //function to send data to server for validation
    const sendData = async () =>{

        const input_data = {
            ptncode: ptnCode,
            password:password,
        }

        try{
            const response = await fetch(import.meta.env.VITE_AdminlogVerifyURL,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(input_data),
            });
    
            if(!response.ok){
                throw new Error('eror caught')
            }
            const data = await response.json();
            
            if(data.response === 'success'){
                SetRedirection(true);
                window.location.href= import.meta.env.VITE_AdminlogURL;
            }
            else if(data.response === 'failed'){
                window.location.href= import.meta.env.VITE_homeURL;
            }

        }
        catch(err){
            null
        }
    }

    if(Redirect === true){
        return(
            <div>
                <p>redirecting......</p>
            </div>
        );
    }

    // Check window size
    const width = window.innerWidth;
    const height = window.innerHeight;
    const valid = width > 900 && height > 500;
    if (valid) {
        null
    }
    return (
        <div className={styles.main_cont}>
            <p className={styles.main_txt}>Members Page Login</p>
            <input
                className={styles.input_field}
                type="text"
                placeholder="Enter PTN Code"
                minLength="0"
                maxLength="5"
                required
                value={ptnCode}
                onChange={handlePtnCodeChange}
            />
            <input
                className={styles.input_field}
                type="text"
                placeholder="Enter Password"
                required
                minLength="0"
                value={password}
                onChange={handlePasswordChange}
            />
            <button className={styles.login_btn} onClick={sendData} >Login</button>
            <Link to='/' ><p className={styles.link_txt} onClick={homePageRed} >Go Back To Home</p></Link>
            <Outlet/>
        </div>
    );   
}

export default MembersPage;
