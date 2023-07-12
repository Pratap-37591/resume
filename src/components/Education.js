import React, { useContext } from 'react'
import { ContactInfo } from '../App';

const Education = () => {
  const education = useContext(ContactInfo).todos;

  console.log(education);
  return (
   
    <div className="contactInfo education">
      <h3 className="title">Education</h3>
      
      <ul>
        { education && 
        education.map((todo, index) => (
          <li key={index}>
            {todo}
          </li>
          
        ))}
      </ul>
      
      
        </div>

  )
}

export default Education;