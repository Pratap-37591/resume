import React from 'react'
import './App.css'
import Leftside from './components/Leftside'
import Rightside from './components/Rightside'


const App = () => {
  
  return (
    
    <>
    <button className='btn btn-3'>Edit <span>+</span></button>
    <div className='container'>
     <div className="left_side">
      <Leftside/>
     </div>
     <div className="right_side">
      <Rightside/>
     </div>
    
     </div>
    <div className="buttons">
     <button className='btn btn-1'>Preview</button>
      <button className='btn btn-2'>Download</button>
     </div>
  
     </>
  )
}

export default App;