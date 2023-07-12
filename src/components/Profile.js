import React, { useContext } from 'react'
import { ContactInfo } from '../App';

const Profile = () => {
  const profile = useContext(ContactInfo).profile;

  return (
    <div className='about'>
      <h2 className='title2'>Profile Info</h2>
      <p className='profile-des'>{profile}</p>
    </div>
  )
}

export default Profile;