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

  const [educationData, setEducationData] = useState([{
    startYear: '',
    endYear: '',
    courses:  '',
    schools: ''
  }]);

  
  const [showResume, setShowResume] = useState(false);
  const [showForm, setShowForm] = useState(false);

const [todos, setTodos] = useState([]);
const [start, setStart] = useState('');
const [end, setEnd] = useState('');
const [course, setCourse] = useState('');
const [univeristy, setUniveristy] = useState('');

   const [lang, setLang] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const [profile, setProfile]  = useState('');



  const [experience, setExperience] = useState([]);
  const [startExp, setStartExp] = useState('');
  const [endExp, setEndExp] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [roleDes, setRoleDes] = useState('');

  const [skill, setSkill] = useState([]);
  const [newSkill, setNewSkill] = useState('');

 useEffect(() =>{
  const storedContactData = JSON.parse(localStorage.getItem("resumeData"))
 

  return storedContactData ? setContactProfile(storedContactData): 'contactProfile'; 

  // if(storedContactData) {
  //   setContactProfile(storedContactData);
  // }
 },[])




// useEffect(() => {
//   const storedprofile = JSON.parse(localStorage.getItem("profileData"))
  
//   if(storedprofile) {
//     setProfile(storedprofile)
//   }
// }, [])
// generates an array of 50 years, from 2022 to 1973

//  const years = Array.from({ length: 60 }, (_, i) => 2023 - i);

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


    //  console.log(educationData);
    //  setEducationData([{
    //   startYear: '',
    //   endYear: '',
    //   courses: '',
    //   schools: '',
    //  }])


   localStorage.setItem('resumeData', JSON.stringify(resumeData));
    alert('Resume updated successfully!');
  };
  

//for education data..........
const handleCheck = (index, e, selected) => {
 const updateData = educationData.map((item,i) => {
  if(i === index) {
    return {
      ...item,
      [selected]: e.target.value
    }
  }
  return item;
 });
 setEducationData(updateData)
}

const handleRow = () => {
 setEducationData([...educationData, {
  startYear: '',
  endYear: '',
  courses: '',
  schools: ''
 }])
}

const handleDelete = (index) => {
   setEducationData((prevData) => prevData.filter((item,i) => i !== index));
}



// const handleInputChange = (e) => {
//   setNewTodo(e.target.value);
// };

const handleAddTodo = () => {
  if (start.trim() !== '') {
    setTodos([...todos, start, end,course,univeristy]);
    setStart('');
    setEnd('');
    setCourse('');
    setUniveristy('')
  }
};

const handleDeleteTodo = (index) => {
  const updatedTodos = todos.filter((_, i) => i !== index);
  setTodos(updatedTodos);
};


//language
 const handleAddLang = () => {
    if (newTodo.trim() !== '') {
      setLang([...lang, newTodo]);
      setNewTodo('');
    }
  };
  const handleDeleteLang = (index) => {
    const updatedTodos = lang.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleInputChange = (e) => {
        setNewTodo(e.target.value);
      };


  //skill
  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      setSkill([...skill, newSkill]);
      setNewSkill('');
    }
  }

  const handleDeleteSkill = (index) =>{
    const updatedSkill = skill.filter((_, i) => i !== index);
    setTodos(updatedSkill);
  }
 

  return (
    <ContactInfo.Provider value={{contactProfile , educationData ,todos,handleDeleteTodo,start,profile, lang, skill}}>  
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


{/* <h2>Education</h2>
{
 
  educationData && Array.isArray(educationData) && educationData.map((details, index) => 
  (

  <>

  <section key={index}>
  <label htmlFor="startYear">Start Year:</label>
   <input type='date' onChange={(e) => handleCheck(index,e,"startYear")} value={details?.startYear}/>

  <label htmlFor="endYear">End year:</label>
   <input type='date' onChange={(e) => handleCheck(index,e,"endYear")} value={details?.endYear}/>

  <label htmlFor="courses">courses:</label>
   <input type='text' onChange={(e) => handleCheck(index,e,"courses")} value={details?.courses}/>


  <label htmlFor="schools">schools/univeristy:</label>
   <input type='text' onChange={(e) => handleCheck(index,e,"schools")} value={details?.schools}/>

   </section>
   {
    index !== educationData.length-1 ? <div className='horizontal'></div> : ''
   
  }
  {
    index === 0 ? "" : <button onClick={() => handleDelete(index)}>Delete</button>

  }

</>
))}

<span className='addbutton' type='button' onClick={handleRow}>Add New Position</span>
<br/> */}
<div className='education'>
  <h2>Education</h2>
  <label htmlFor='start'>startYear:</label>
<input type="date" value={start}  onChange={(e)=>setStart(e.target.value)} placeholder='Start Year' />
<label htmlFor='start'>endYear:</label>
<input type="date" value={end}  onChange={(e)=>setEnd(e.target.value)} placeholder='End Year' />
<label htmlFor='start'>Courses:</label>
<input type="text" value={course}  onChange={(e)=>setCourse(e.target.value)} placeholder='Courses' />
<label htmlFor='start'>Schools/Univeristy:</label>
<input type="text" value={univeristy}  onChange={(e)=>setUniveristy(e.target.value)} placeholder='Univeristy' />


      <button onClick={handleAddTodo}>Add</button>
      {/* <button onClick={(index) => handleDeleteTodo(index)}>Delete</button> */}
      <div className='todos'>
      <ul>
        { todos && 
        todos.map((todo, index) => (
          <li key={index}>
            {todo}
           <button  onClick={() => handleDeleteTodo(index)}>Delete</button>

          </li>
        ))}
      </ul>
      </div>
      </div>
      {/* <TodoList/> */}
  
   <div className='lang'>
  <h2>Language</h2>
  <input type="text" value={newTodo} onChange={handleInputChange} />
 <button onClick={handleAddLang}>Add</button>
 <div className='lnguage'>
     <ul>
        {lang.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteLang(index)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </div>

<h2>Profile</h2>
<label htmlFor='profile'>profie:</label>
<input type='text' onChange={(e) => setProfile(e.target.value)}  value={profile}/>
  {/* <textarea  style={{marginBottom: 30}} onChange={(e) => setProfile(e.target.value)}  value={profile} rows={5} cols={10}></textarea>  */}
  <br/>

<h2>Experience</h2>
<section>
  <label htmlFor="startExp">Start Year:</label>
  <input type="date" value={startExp}  onChange={(e)=>setStartExp(e.target.value)} placeholder='Start Year' />

  <label htmlFor="endExp">End year:</label>
  <input type="date" value={endExp}  onChange={(e)=>setEndExp(e.target.value)} placeholder='Start Year' />


  <label htmlFor="company">Company Name:</label>
   <input type='text' />


  <label htmlFor="schools">Role:</label>
   <input type='text' />

  <label htmlFor="schools">Role Desc:</label>
   <input type='text' />

   </section>


  <h2>PROFESSIONAL SKILLS</h2> 
  <section>
  <input type="text" value={skill} onChange={(e) =>  setNewSkill(e.target.value)} />
 <button onClick={handleAddSkill}>Add</button>
 <div className='skill'>
     <ul>
        {skill.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteSkill(index)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </section>
     <button type="submit" className='update'>Update Resume</button>
    </form>
  </div>
      )}   
  </Grid>
    </Grid>
    
    </ContactInfo.Provider>
  )
}

export default App;



// <select id="startYear" onChange={(e) => setEducationData({...educationData, startYear: (parseInt(e.target.value))})}>
// <option value="">Select a year</option>
// {years.map((year) => (
//   <option key={year} value={year}>
//    {year}
//   </option>
// ))}
// </select>
// <br />
// <label htmlFor="endYear">End Year:</label>
// <select id="endYear"  onChange={(e) => setEducationData({...educationData, endYear: (parseInt(e.target.value))})}>
// <option value="">Select a year</option>
//        {years.map((year) => (
//  <option key={year} value={year}>
//  {year}
//  </option>
// ))}
// </select>