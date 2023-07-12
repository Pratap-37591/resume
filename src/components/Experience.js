import React, { useContext } from 'react'
import { ContactInfo } from '../App';

const Experience = () => {
  const usercontact = useContext(ContactInfo).experience;
  return (
  
    <div className='about'>
     <h2 className='title2'>Experience</h2>
     <div className='todos'>
      <ul>
        {usercontact && 
        usercontact.map((exp, index) => (
          <li key={index}>
            {exp}
          </li>
        ))}
      </ul>
      </div>
    
    </div>
  )
}

export default Experience