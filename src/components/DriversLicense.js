import React, {useState} from 'react'
import Footer from './Footer'
import Technologies from './Technologies'
import Education from './Education'

import DLMetaStats from './DLMetaStats'
import About from './About.js'

import profilePic from '../pics/profilePic.jpg'
import DLContactStats from './DLContactStats'
import Art from './Art'




const Bio = () => {
  return(
    <div className='driverslicense_body'>
      <div className='profile_pic' style={{textAlign: 'center'}}>
        <img src={profilePic} alt='profile'/>
        <div style={{paddingBottom: '10px'}}>
          <h3>Nicholas</h3>
          <h3>Lopez</h3>
        </div>
      </div>
      <DLContactStats />
      <DLMetaStats />
    </div>
  )
}


const DriversLicense = ({artPieces, toggleModal, setCurrentArtPiece}) => {
  const [component, setComponent] = useState('bio')
  
  

  return (
    <>
      <div className='DriversLicense'>
        <div className='tray' style={{width: '100%'}} >
          <div className='txt_row driverslicense_header'>
            <h3>C A L I F O R N I A</h3>
            <p>DEVELOPER LISCENSE</p>
          </div>
          <hr className='driverslicense_hr_top'/>
          <div className='dl_btn_holder'>
            <button className={component === "bio" ? 'active' : ''} onClick={()=>setComponent('bio')}>Bio</button>
            <button className={component === "about" ? 'active' : ''} onClick={()=>setComponent('about')}>About</button>
            <button className={component === "tech" ? 'active' : ''} onClick={()=>setComponent('tech')}>Technologies</button>
            <button className={component === "education" ? 'active' : ''} onClick={()=>setComponent('education')}>Education</button>
            <button className={component === "art" ? 'active' : ''} onClick={()=>setComponent('art')}>Art</button>
          </div>
          <div className='dl_bottom_section'>
            {component === "bio" && <Bio />}
            {component === "tech" && <Technologies />}
            {component === "education" && <Education />}
            {component === "about" && <About />}
            {component === "art" && <Art  toggleModal={toggleModal} setCurrentArtPiece={setCurrentArtPiece} artPieces={artPieces} />}
          </div>
            


          <Footer />
      </div>
    </div>
 
  </>
  )
}











export default DriversLicense

