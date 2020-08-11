import React, {useState} from 'react'
import Footer from './Footer'
import Technologies from './Technologies'
import Education from './Education'

import DLMetaStats from './DLMetaStats'
import Bio from './Bio.js'

import profilePic from '../pics/profilePic.jpg'
import DLContactStats from './DLContactStats'



const DriversLiscence = () => {
  const [component, setComponent] = useState('bio')


  return (
    <div className='contact'>
      <div className='tray' style={{width: '100%'}} >
        <div className='txt_row driverslicense_header'>
          <h3>C A L I F O R N I A</h3>
          <p>DEVELOPER LISCENSE</p>
        </div>
        <hr className='driverslicense_hr_top'/>
        <div className='driverslicense_body'>
          <div className='profile_pic' style={{textAlign: 'center'}}>
            <img src={profilePic} alt='profile'/>
            <h3>Nicholas</h3>
            <h3>Lopez</h3>
          </div>
          <DLContactStats />
          <DLMetaStats />
        </div>
      <div className='dl_btn_holder'>
        <button className={component === "bio" ? 'active' : ''} onClick={()=>setComponent('bio')}>Bio</button>
        <button className={component === "tech" ? 'active' : ''} onClick={()=>setComponent('tech')}>Technologies</button>
        <button className={component === "education" ? 'active' : ''} onClick={()=>setComponent('education')}>Education</button>
      </div>

      <div className='dl_bottom_section'>
        {component === "tech" && <Technologies />}
        {component === "education" && <Education />}
        {component === "bio" && <Bio />}
      </div>

      
      <Footer />
    </div>
  </div>
  )
}










export default DriversLiscence

