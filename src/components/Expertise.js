import React from 'react'

const Expertise = () => {
  return (
   <div className="about skills">
    <h2 className='title2'>Professional Skills</h2>
    <div className="box">
      <h4>Html</h4>
      <div className="percent">
        <div style={{width: '90%'}}></div>
      </div>
    </div>
    <div className="box">
      <h4>CSS</h4>
      <div className="percent">
      <div style={{width: '70%'}}></div>
      </div>
    </div>
    <div className="box">
      <h4>Javascript</h4>
      <div className="percent">
      <div style={{width: '50%'}}></div>
      </div>
    </div>
    <div className="box">
      <h4>React</h4>
      <div className="percent">
      <div style={{width: '30%'}}></div>
      </div>
    </div>
   </div>

  )
}

export default Expertise