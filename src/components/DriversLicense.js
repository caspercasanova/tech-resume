import React, {useState} from 'react'
import Footer from './Footer'
import Technologies from './Technologies'
import Education from './Education'

import DLMetaStats from './DLMetaStats'
import About from './About.js'

import profilePic from '../pics/profilePic.jpg'
import DLContactStats from './DLContactStats'
import Art from './Art'


import art1 from '../art/5elementVaporized.png'
import art2 from '../art/Artboard 1.png'
import art3 from '../art/Face-grid 002.png'
import art4 from '../art/la_80s_outline.png'
import art5 from '../art/LA_OUTLINE_VAPORIZED_REWORKTREES.png'
import art7 from '../art/newsonus.png'
import art8 from '../art/pipedreamz.png'
import art9 from '../art/untitledFace001.png'
import art10 from '../art/untitledFace002.png'
import art11 from '../art/untitledFace003.png'
import art12 from '../art/untitledFace004.png'


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


const DriversLicense = () => {
  const [component, setComponent] = useState('bio')
  const [modal, toggleModal] = useState(false)

  let artPieces = [art1, art2, art3, art4, art5,  art7, art8, art9, art10, art11, art12]
 
  const [currentArtPiece, setCurrentArtPiece] = useState(art1)

  return (
    <>
      <div className='DriversLicense'>
        <div className='tray' style={{width: '100%'}} >
          <div className='txt_row driverslicense_header'>
            <h3>C A L I F O R N I A</h3>
            <p>DEVELOPER LISCENSE</p>
          </div>
          <hr className='driverslicense_hr_top'/>
        <div className='dl_bottom_section'>
          {component === "bio" && <Bio />}
          {component === "tech" && <Technologies />}
          {component === "education" && <Education />}
          {component === "about" && <About />}
          {component === "art" && <Art  toggleModal={toggleModal} setCurrentArtPiece={setCurrentArtPiece} artPieces={artPieces} />}
        </div>
          
        <div className='dl_btn_holder'>
          <button className={component === "bio" ? 'active' : ''} onClick={()=>setComponent('bio')}>Bio</button>
          <button className={component === "about" ? 'active' : ''} onClick={()=>setComponent('about')}>About</button>
          <button className={component === "tech" ? 'active' : ''} onClick={()=>setComponent('tech')}>Technologies</button>
          <button className={component === "education" ? 'active' : ''} onClick={()=>setComponent('education')}>Education</button>
          <button className={component === "art" ? 'active' : ''} onClick={()=>setComponent('art')}>Art</button>
        </div>


        
        <Footer />
      </div>
    </div>
    {modal && <Modal artPiece={currentArtPiece} togglModal={() => toggleModal(false)}/>}
  </>
  )
}

const Modal = ({artPiece, togglModal}) => {
  return(
    <div className='modal_background'>
      <div className='modal'>
        <div className='modal_header'>
          <h1>Some Art I Made</h1>
          <button onClick={togglModal}>Exit</button>
        </div>
        <div className='modal_img'>
          <img src={artPiece}  alt={artPiece} />
        </div>
      </div>
    </div>
  )
}










export default DriversLicense

