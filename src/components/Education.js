import React, { useContext } from 'react'
import { ContactInfo } from '../App';

const Education = () => {

  const eduction = useContext(ContactInfo).educationData;
  return (
    <div className="contactInfo education">
      <h3 className="title">Education</h3>
      <ul>
        <li>
          <h5>{eduction.startYear} - {eduction.endYear}</h5>
          <h4>{eduction.courses}</h4>
          <h4>{eduction.schools}</h4>
        </li>
        
      </ul>
    </div>
  )
}

export default Education;