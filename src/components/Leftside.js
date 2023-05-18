import React, { useContext }  from 'react'
import Contact from './Contact'
import Education from './Education'
import Language from './Language'
import { ContactInfo } from '../App';
import TodoList from './Todo';


const Leftside = () => {
  const usercontact = useContext(ContactInfo).contactProfile;

  
  return (
    <>
    <div className='profielText'>
     <figure className='profile'>
      <img src="image\download.png" alt="na" />
     </figure>
     <h2>{usercontact.name}<br /> <span>{usercontact.role}</span> </h2>
     </div>
     <Contact />
     <Education/>
     <Language/>
    </>
  )
}

export default Leftside;