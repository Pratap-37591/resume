import React from 'react'
// import { ContactInfo } from '../App';

const Profile = ({profile}) => {


  return (
    <div className='about'>
      <h2 className='title2'>Profile Info</h2>
      <p>{profile}</p>
    </div>
  )
}

export default Profile;