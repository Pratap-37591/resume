import React, { useContext } from 'react'
import { ContactInfo } from '../App';

const Expertise = () => {
  const skill = useContext(ContactInfo).skill;

  return (
   <div className="about skills">
    <h2 className='title2'>Professional Skills</h2>
    <div className="box">
    <ul>
        {skill && 
        skill.map((todo, index) => (
          <li key={index}>
           {todo}
          </li>
        ))}
      </ul>
    </div>

   </div>

  )
}

export default Expertise