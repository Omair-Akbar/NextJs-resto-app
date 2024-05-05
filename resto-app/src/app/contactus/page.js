import React from 'react'
import { RiCustomerService2Line } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { PiChats } from "react-icons/pi";
import CustomerHeader from '../_components/CustomerHeader'
import Footer from '../_components/Footer';

const page = () => {
  return (
    <>
      <CustomerHeader />
      <h1 style={{ fontSize: "38px", backgroundColor:"rgb(231, 230, 230)", padding: "15px", color: "black" }} className='heading'>Contact us</h1>
      <div className='contact-wrap'>
        <div className='contact-number'>
          <span className='contact-icon'><RiCustomerService2Line /></span>
          <h2>BY PHONE</h2>
          <h6>(Monday to Friday, 9am to 4pm PST)</h6>
          <div className='contact-span'>
            <p>Local Bahawalpur :</p>
            <p>03xx-xxx-xxxx</p>
          </div>
          <div className='contact-span'>
            <p>All over Pakistan :</p>
            <p>03xx-xxx-xxxx</p>
          </div>
        </div>
        <div className='contact-card'>
          <span className='contact-icon'> <TfiEmail /></span>
          <h2>EMAIL</h2>
            <p>Just send us your question or concerns by starting a new case and we will give you the help you need.</p>
        <button>START NOW</button>
        </div>
        <div className='contact-card'>
          <span className='contact-icon'><PiChats /></span>
          <h2>LIVE CHAT</h2>
          <p>Chat with a member of our in-house team.</p>
          <button>START CHAT</button>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default page
