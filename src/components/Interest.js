import React, { useContext } from 'react'
import { ContactInfo } from '../App';

const Interest = () => {
  const interest = useContext(ContactInfo).interest;

  return (
    <div className='about interest'>
     <h2 className="title2">Interest</h2>
     <ul>
     <div className='interest'>
     <ul>
        {interest.map((intr, index) => (
          <li key={index}>
            {intr}
          </li>
        ))}
      </ul>
      </div>
     </ul>
    </div>
  )
}

export default Interest