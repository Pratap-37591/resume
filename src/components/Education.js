import React, { useContext } from 'react'
import { ContactInfo } from '../App';

const Education = () => {

  const education = useContext(ContactInfo).educationData;
  return (
   
    <div className="contactInfo education">
      <h3 className="title">Education</h3>
      <ul>
        <li>
          <h5>{education.startYear} - {education.endYear}</h5>
          <h4>{education.courses}</h4>
          <h4>{education.schools}</h4>
        </li>
        
      </ul>
    </div>

  )
}

export default Education;