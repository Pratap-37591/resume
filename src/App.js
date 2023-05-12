import React, { useState, useEffect } from 'react'
import './App.css'
import Leftside from './components/Leftside'
import Rightside from './components/Rightside'
import { Grid} from '@mui/material';
import { createContext } from 'react';
// import Profile from './components/Profile';

export const ContactInfo = createContext();

const App = () => {
 
  const [contactProfile, setContactProfile ] = useState( {
    name: 'pratap',
    role: 'web dev',
    tel: '+123 456 7890',
    email: 'pratap@gmail.com',
    github: 'https://github.com/pratap-2321',
    linkedin: 'https://www.linkedin.com/feed',
    address: 'BDVT, karntaka'
  });

  const [educationData, setEducationData] = useState({
    startYear: 2008,
    endYear: 2012,
    courses:  'BCA',
    schools: 'SSC'
  })

  const [languageTodoList, setLanguageTodoList] = useState([]);
  const [newTodo, setNewTodo]  = useState('');
  

  const [showResume, setShowResume] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [profile, setProfile]  = useState('')

 useEffect(() =>{
  const storedContactData = JSON.parse(localStorage.getItem("resumeData"))
 

  return storedContactData ? setContactProfile(storedContactData): 'contactProfile'; 

  // if(storedContactData) {
  //   setContactProfile(storedContactData);
  // }
 },[])

 useEffect(() => {
  const storedEducationData = JSON.parse(localStorage.getItem("eduData"));
  if (storedEducationData) {
    setEducationData(storedEducationData);
  }

}, []);


//for language todolist and useEffect..
useEffect(() => {
  const storedTodoList = JSON.parse(localStorage.getItem("landata"))
  if(storedTodoList) {
    setLanguageTodoList(storedTodoList)
  }
}, [])


useEffect(() => {
  const storedprofile = JSON.parse(localStorage.getItem("profileData"))
  
  if(storedprofile) {
    setProfile(storedprofile)
  }
}, [])
// generates an array of 50 years, from 2022 to 1973

 const years = Array.from({ length: 60 }, (_, i) => 2023 - i);

  const handleSubmit = (e) => {
    e.preventDefault();
    const resumeData = {
      name: contactProfile.name,
      role: contactProfile.role,
      tel: contactProfile.tel,
      email: contactProfile.email,
      github: contactProfile.github,
      linkedin: contactProfile.linkedin,
      address: contactProfile.address,
    }

   const eduData = {
    startYear: educationData.startYear,
    endYear: educationData.endYear,
    courses: educationData.courses,
    schools: educationData.schools
   }

   const landata = {
    languageTodoList: languageTodoList
   }

   const profileData = {
    profiles: profile
   }

    localStorage.setItem('eduData', JSON.stringify(eduData))
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    localStorage.setItem('landata', JSON.stringify(landata));
    localStorage.setItem('profileData', JSON.stringify(profileData))
    alert('Resume updated successfully!');
  };
  
useEffect(() => {
  localStorage.setItem('languageTodoList', JSON.stringify(languageTodoList))
}, [languageTodoList])


const addTodo = () => {
  if (newTodo !== '') {
    setLanguageTodoList([...languageTodoList, newTodo]);
    setNewTodo('');
  }
};

const removeTodo = (index) => {
  const newTodoList = [...languageTodoList];
  newTodoList.splice(index, 1);
  setLanguageTodoList(newTodoList);
};

  return (
    <ContactInfo.Provider value={{contactProfile , educationData, profile }}>  
    <Grid  container>
  <Grid item xs={7}>
  <button className='btn btn-3 edit-button' onClick={() => { setShowResume(!showResume);  setShowForm(!showForm)}}>Edit <span>+</span></button>
     <div className= "resume"  style={{transform : showResume ? 'translateX(-17%)' : 'translateX(5%)'}}>
    <div className='container'>
     <div className="left_side">
      <Leftside />
     </div>
     <div className="right_side">
      <Rightside/>
     </div>
    
     </div>
    <div className="buttons">
     <button className='btn btn-1'>Preview</button>
      <button className='btn btn-2'>Download</button>
     </div>
     </div>
  </Grid>
  <Grid item xs={4}  sx={{display: 'flex', flexDirection: 'column'}}>
  {showForm && (
<div className='form-container'>
<form onSubmit={handleSubmit} className='form-display'>

<label htmlFor="name">Enter Your name:</label>
<input type="text" id="name" name="name" value={contactProfile.name} onChange={(e) =>  setContactProfile({...contactProfile, name: e.target.value})} />

<label htmlFor="role">Enter Your Role:</label>
<input type="text" id="role" name="role" value={contactProfile.role} onChange={(e) =>  setContactProfile({...contactProfile , role: e.target.value})} />

 <h2>Contact Info</h2>
 <label htmlFor="tel">Phone number:</label>
<input type="tel" id="tel" name="tel" value={contactProfile.tel} onChange={(e) =>  setContactProfile({...contactProfile, tel: e.target.value})} />

 <label htmlFor="email">Email ID:</label>
<input type="email" id="email" name="email" value={contactProfile.email} onChange={(e) =>  setContactProfile({...contactProfile, email: e.target.value})} />

 <label htmlFor="github">Github ID:</label>
<input type="url" id="github" name="github" value={contactProfile.github} onChange={(e) =>  setContactProfile({...contactProfile, github: e.target.value})} />

 <label htmlFor="linkedin">Linkedin ID:</label>
<input type="url" id="linkedin" name="linkedin" value={contactProfile.linkedin} onChange={(e) =>  setContactProfile({...contactProfile, linkedin: e.target.value})} />

 <label htmlFor="address">Enter your city:</label>
<input type="text" id="address" name="address" value={contactProfile.address} onChange={(e) =>  setContactProfile({...contactProfile, address: e.target.value})} />

<h2>Education</h2>


 <label htmlFor="startYear">Start Year:</label>
     <select id="startYear" onChange={(e) => setEducationData({...educationData, startYear: (parseInt(e.target.value))})}>
        <option value="">Select a year</option>
       {years.map((year) => (
          <option key={year} value={year}>
           {year}
          </option>
       ))}
       </select>
    <br />
      <label htmlFor="endYear">End Year:</label>
      <select id="endYear"  onChange={(e) => setEducationData({...educationData, endYear: (parseInt(e.target.value))})}>
        <option value="">Select a year</option>
               {years.map((year) => (
         <option key={year} value={year}>
         {year}
         </option>
       ))}
  </select>

  <label htmlFor="course">Course:</label>
 <input type="text" id="course" name="course" value={educationData.courses} onChange={(e) =>  setEducationData({...educationData, courses: e.target.value})} />

 <label htmlFor="role">School/University:</label>
 <input type="text" id="school" name="school" value={educationData.schools} onChange={(e) =>  setEducationData({...educationData , schools: e.target.value})} />

 <h2>Language</h2>
      <ul>
    <li> {newTodo}</li>
        
      </ul>
      <p>Add a new todo:</p>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
      {
        languageTodoList.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => removeTodo(index)}>x</button>
          </li>
        ))}
      </ul>

  <h2>Profile Info</h2>
<input type="text" id="profile" value={profile} onChange={(e) =>  setProfile(e.target.value)} />

<button type="submit">Update Resume</button>
</form>
</div>
      )}

  </Grid>
    </Grid>
    </ContactInfo.Provider>
  )
}

export default App;



