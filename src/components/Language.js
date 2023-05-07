import React from 'react'

const Language = () => {
  return (
    <div className="contactInfo language">
    <h3 className="title">Languages</h3>
    <ul>
      <li>
        <span className='text'>English</span>
        <span className="percent">
          <div style={{width: '85%'}}></div>
        </span>
        </li>
      <li>
        <span className='text'>Kannada</span>
        <span className="percent">
        <div style={{width: '90%'}}></div>
        </span>
        </li>
      <li>
        <span className='text'>Hindi</span>
        <span className="percent">
        <div style={{width: '30%'}}></div>
        </span>
        </li>
        </ul>
        </div>
  )
}

export default Language;