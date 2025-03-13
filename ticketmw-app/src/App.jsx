import {Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
//page imports
import NotFound from './notFound/404.jsx'
import Home from './Home/home.jsx'
import About from './about/about.jsx'
import Contact from './contact/contact.jsx'
import MembersPage from './membersPage/membersPage.jsx'
import TicketPage from './ticketPage/ticketpage.jsx'
import PaymentError from './Error/transFailed.jsx'
import LayOut from './eventViewSource/layout.jsx'
import LandingPage from './DefaultPages/landingpage.jsx'
import MaintanancePage from './DefaultPages/maintanance.jsx'
import BlueGalaxy from './special/special.jsx'

function App() {

  const[Events, SetEvents] = useState([]);
  const[landing, Setlanding] = useState(null);
  const[Connection, SetConnection] = useState(null);
  const[Loading, SetLoading] = useState(true);

  const GetlandingState = async() =>{
    try{
      const res = await fetch(import.meta.env.VITE_getlandingstateURL);
      const data = await res.json();
      if(data === 0){
        Setlanding(false);
      }
      if(data === 1){
        Setlanding(true);
      }

    }
    catch(err){
      if (err){
        SetConnection(false);
      }
    }
  };

  const GetData = async()=>{
    try{
      const res = await fetch (import.meta.env.VITE_eventdataurl);
      const data = await res.json();

      if(data){
        SetEvents(data);
        SetConnection(true);
        SetLoading(false);
      };

    }
    catch(err){
      if(err) {
        SetConnection(false);
        SetLoading(false);
      }
    }
  }

  useEffect(()=>{
    GetData();
    GetlandingState();
  },[]);

  if(Loading === true){
    return(
      <>
        <MaintanancePage msg= "Connecting to the Server...."/>
      </>
    );
  };

  if(Connection === false) {
    return(
      <>
        <MaintanancePage msg= "Server Connection Failed"/>
      </>
    );
  };

  return (
    <>
      {landing === true? 
      
      <LandingPage/>
      :
      <Routes>
        {/*permanent pages*/}
        <Route path='*' element={<NotFound/>} />
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='/membersPage' element={<MembersPage/>} />
        <Route path='/ticketmalawi/getticket/page' element={<TicketPage />} />
        <Route path='/PaymentError/ticketmalawi' element={<PaymentError/>} />
        <Route path='/bluegalaxy' element={<BlueGalaxy/>} />
        {/*eventPages paths*/}
        
        {/*dynamic paths*/}
        {
          Events.map((Event)=>(
            <Route
              key={Event.id}
              path={Event.EventURL}
              element={<LayOut 
              eventdata={Event}
              />}
            />
          ))
        }
      </Routes>}
    </>
  )
}

export default App
