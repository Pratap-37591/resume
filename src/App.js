import React, { useState, useEffect } from 'react'
import './App.css'
import Leftside from './components/Leftside'
import Rightside from './components/Rightside'
import { Grid} from '@mui/material';
import { createContext } from 'react';

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
  const [interest, setInterest] = useState([]);
  const [newInterest, setNewInterest] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const storedContactData = JSON.parse(localStorage.getItem("resumeData"));
    if (storedContactData) {
      setContactProfile(storedContactData);
    }
  }, []);

  


const handlePrevious = () => {
  setCurrentStep(currentStep  - 1);
};

const handleNext = () => {
  setCurrentStep(currentStep + 1);
}

 
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
  
  
    //experience
  
    const handleAddExp = () => {
    if(startExp.trim() !== '') {
      setExperience([...experience, startExp, endExp, company, role, roleDes]);
      setStartExp('');
      setEndExp('');
      setCompany('');
      setRole('');
      setRoleDes('');
    }
  };
  
  const handleDeleteExp = (i1) => {
    const updateExp = experience.filter((_, i) => i !== i1);
    setExperience(updateExp);
  }
  
  //language
   const handleAddLang = () => {
      if (newTodo.trim() !== '') {
        setLang([...lang, newTodo]);
        setNewTodo('');
      }
    };
    const handleDeleteLang = (index) => {
      const updatedTodos = lang.filter((_, i) => i !== index);
      setLang(updatedTodos);
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
      setSkill(updatedSkill);
    }
   
    const handleSkill = (e) => {
       setNewSkill(e.target.value)
    }
  
    //interest
    const handleAddInterest = () => {
      if(newInterest.trim() !== '') {
        setInterest([...interest, newInterest]);
        setNewInterest('');
      }
    }
  
    const handleDeleteInterest = (index) => {
         const updateInterest = interest.filter((_, i) => i !== index);
         setInterest(updateInterest);
    }
  
    const handleInterest = (e) => {
       setNewInterest(e.target.value)
    }


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

     localStorage.setItem('resumeData', JSON.stringify(resumeData));
      alert('Resume updated successfully!');
    };

   const renderStep1 = () => {
    return(
      <div className='step1'>
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
    <div className='todos'>
     <ul>
       {todos && 
        todos.map((todo, index) => (
          <li key={index}>
            {todo}
           <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
      </div>
    
        <div className='button-prev'>
          <button  className='btn1' type='button' onClick={handlePrevious} disabled>
            Previous
          </button>
          <button className='btn2' type='button' onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    )
   }


   const renderStep2 =  () => {
    return (
     <div className='step2'>
         <div className='lang'>
  <h2>Language</h2>
  <input type="text" value={newTodo} onChange={handleInputChange} />
 <button onClick={handleAddLang}>Add</button>
 <div className='lnguage'>
     <ul>
        {lang &&
         lang.map((langu, index) => (
          <li key={index}>
            {langu}
            <button onClick={() => handleDeleteLang(index)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
<div className='profile'>
<h2>Profile</h2>
<label htmlFor='profile'>profie:</label>
<input type='text' onChange={(e) => setProfile(e.target.value)}  value={profile}/>
  <br/>
  </div>
<div className='experience'>
<h2>Experience</h2>
<section>
  <label htmlFor="startExp">Start Year:</label>
  <input type="date" value={startExp}  onChange={(e)=>setStartExp(e.target.value)} placeholder='Start Year' />

  <label htmlFor="endExp">End year:</label>
  <input type="date" value={endExp}  onChange={(e)=>setEndExp(e.target.value)} placeholder='Start Year' />


  <label htmlFor="company">Company Name:</label>
   <input type='text' value={company} onChange={(e) => setCompany(e.target.value)} placeholder='Enter company name' />


  <label htmlFor="schools">Role:</label>
   <input type='text' value={role} onChange={(e) => setRole(e.target.value)} placeholder='Enter role'/>

  <label htmlFor="schools">Role Desc:</label>
   <input type='text' value={roleDes} onChange={(e) => setRoleDes(e.target.value)} placeholder='Enter role description'/>

   </section>
   <button onClick={handleAddExp}>Add</button>
      <div className='todos'>
      <ul>
        {experience && 
        experience.map((exp, index) => (
          <li key={index}>
            {exp}
           <button  onClick={() => handleDeleteExp(index)}>Delete</button>

          </li>
        ))}
      </ul>
      </div>
      </div>

  <div className='skill'>
  <h2>PROFESSIONAL SKILLS</h2> 
  <section>
  <input type="text" value={newSkill} onChange={handleSkill} />
 <button onClick={handleAddSkill}>Add</button>
 <div className='skill'>
     <ul>
        {skill.map((item, index) => (
          <li key={index}>
            {item }
            <button onClick={() => handleDeleteSkill(index)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </section>
    </div>   
   <div className='interest'>
  <h2>INTEREST</h2> 
  <section>
  <input type="text" value={newInterest} onChange={handleInterest} />
 <button onClick={handleAddInterest}>Add</button>
 <div className='interest'>
     <ul>
        {interest.map((intr, index) => (
          <li key={index}>
         {intr}
            <button onClick={() => handleDeleteInterest(index)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </section>
    </div>
    <div className='button-prev'>
          <button className='btn1' type='button' onClick={handlePrevious}>
            Previous
          </button>
          <button className='btn2' type='button' onClick={handleNext} disabled>
            Next
          </button>
        </div>
     </div>
    )
   }
   

   let formContent;
   switch (currentStep) {
    case 1: 
    formContent = renderStep1();
    break;
    case 2: 
    formContent = renderStep2();
    break;
    default:
      formContent = null;
   }

  return (
    <ContactInfo.Provider value={{contactProfile  ,todos,handleDeleteTodo,start,profile, lang, skill, experience, handleDeleteExp, startExp, interest }}>  
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
      <button className='btn btn-2' >Download</button>
     </div>
     </div>
  </Grid>
  <Grid item xs={4}  sx={{display: 'flex', flexDirection: 'column'}}>
  {showForm && (
<div className='form-container'>
<form onSubmit={handleSubmit} className='form-display'>

{formContent}
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
