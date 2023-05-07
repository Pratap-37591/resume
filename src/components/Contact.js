import React from 'react'

const Contact = () => {
  return (
    <div className="contactInfo">
      <h3 className="title">Contact Info</h3>
      <ul>
        <li>
          <span className='icon'><i className="fa-solid fa-phone"></i></span>
          <span className='text'>+123 456 789</span>
        </li>
        <li>
          <span className='icon'><i className="fa-solid fa-envelope"></i></span>
          <span className='text'>johndoe@gmail.com</span>
        </li>
        <li>
          <span className='icon'><i className="fa-brands fa-github"></i></span>
          <span className='text'>www.github.com</span>
        </li>
        <li>
          <span className='icon'><i className="fa-brands fa-linkedin"></i></span>
          <span className='text'>www.linedin.com/me</span>
        </li>
        <li>
          <span className='icon'><i className="fa-solid fa-location-dot"></i></span>
          <span className='text'>Patna, India</span>
        </li>
      </ul>
    </div>
  )
}

export default Contact;