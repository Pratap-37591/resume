import React, { useContext }  from 'react'
import { ContactInfo } from '../App';


const Contact = () => {
  const usercontact = useContext(ContactInfo).contactProfile;




  return (
  
    <div className="contactInfo">
      <h3 className="title">Contact Info</h3>
      <ul>
        <li>
          <span className='icon'><i className="fa-solid fa-phone"></i></span>
          <span className='text'>{usercontact.tel}</span>
        </li>
        <li>

          <span className='icon'><i className="fa-solid fa-envelope"></i></span>
          <span className='text'>{usercontact.email}</span>
        </li>
        <li>
          <span className='icon'><i className="fa-brands fa-github"></i></span>
          <span className='text'>{usercontact.github}</span>
        </li>
        <li>
          <span className='icon'><i className="fa-brands fa-linkedin"></i></span>
          <span className='text'>{usercontact.linkedin}</span>
        </li>
        <li>
          <span className='icon'><i className="fa-solid fa-location-dot"></i></span>
          <span className='text'>{usercontact.address}</span>
        </li>
      </ul>
    </div>
  
  )
}

export default Contact;