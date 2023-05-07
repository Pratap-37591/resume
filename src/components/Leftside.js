import React from 'react'
import Contact from './Contact'
import Education from './Education'
import Language from './Language'

const Leftside = () => {

  return (
    <>
    <div className='profielText'>
     <figure className='profile'>
      <img src="image/profile1.avif" alt="na" />
     </figure>
     <h2>Pratap<br /> <span>Web dev</span> </h2>
     </div>
     <Contact/>
     <Education/>
     <Language/>
    </>
  )
}

export default Leftside