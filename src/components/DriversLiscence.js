import React, {useState} from 'react'

import Technologies from './Technologies'
import hackreactor from '../pics/hackreactor.svg'
import profilePic from '../pics/profilePic.jpg'

import Wave from 'react-wavify'





const DriversLiscence = () => {
  const [component, setComponent] = useState('wave')


  return (
    <div className='contact'>
      <div className='tray' style={{width: '100%'}} >
        <div className='txt_row driverslicense_header'>
          <h3>C A L I F O R N I A</h3>
          <p>S O F T W A R E  E N G I N E E R</p>
        </div>
        <hr className='driverslicense_hr_top'/>
        <div className='driverslicense_body'>
          <div className='profile_pic' style={{textAlign: 'center'}}>
            <img src={profilePic} alt='profile'/>
            <h6>Nicholas Lopez</h6>
          </div>
          <div className='driverslicense_body_text'>
            <div className='txt_row'>
              <h6>LUCKY #</h6>
              <p>0131310</p>
            </div>
            <div className='txt_row'>
              <h6>DOB</h6>
              <p>04/27/1994</p>
            </div>

            <div className='txt_row'>
              <h6>Phone </h6>
              <a href="tel:1-310-977-3170">1-310-977-3170</a>
            </div>
            <div className='txt_row'>
              <h6>Email </h6>
              <a href='mailto:nhjlopez@gmail.com'>nhjlopez@gmail.com</a>
            </div>
            <div className='txt_row'>
              <h6>ADDR</h6>
              <p>REDONDO BCH.</p>
            </div>
            <hr style={{marginBottom: '3px'}}/>
            <div className='txt_row'>
              <h6>Known Alias ( es ) </h6>
              <div style={{textAlign: 'end'}}>
                <p>'Nicky West'</p>
                <p>'Casper Casanova'</p>
              </div>
            </div>
          </div>
          <DLFooter />
        </div>
      <div className='dl_btn_holder'>
        <button className={component === "wave" ? 'active' : ''} onClick={()=>setComponent('wave')}>Wave</button>
        <button className={component === "tech" ? 'active' : ''} onClick={()=>setComponent('tech')}>Technologies</button>
        <button className={component === "education" ? 'active' : ''} onClick={()=>setComponent('education')}>Education</button>
      </div>
      {component === "tech" && <Technologies />}
      {component === "education" && <Education />}
      
      {component === "wave" && 
      <Wave fill='#f79902'
            paused={false}
            options={{
              height: 50,
              amplitude: 30,
              speed: 0.15,
              points: 5
            }}/>
            
        }
      
    </div>
  </div>
  )
}


const DLFooter = () => {
  return (
    <div className='driverslicense_body_footer'>
    <div>
      <div className='driverslicense_body_footer_item'>
        <h6>SEX</h6>
        <p>M</p>
      </div>
      <div className='driverslicense_body_footer_item'>
        <h6>HAIR</h6>
        <p>BLK</p>
      </div>
      <div className='driverslicense_body_footer_item'>
        <h6>EYES</h6>
        <p>HZL</p>
      </div>
    </div>
    <div>
      <div className='driverslicense_body_footer_item'>
        <h6>HGT</h6>
        <p>5'-09''</p>
      </div>
      <div className='driverslicense_body_footer_item'>
        <h6>WGT</h6>
        <p>150lb</p>
      </div>
      <div className='driverslicense_body_footer_item'>
        <h6>Y.O.</h6>
        <p>26</p>
      </div>
    </div>
  </div>
  )
}


const Education = () =>{
  return (
  <div className='technologies'>
    <h3>Hack Reactor</h3>
    <div className='technologies_body'>
      <h6>Computer Software Engineering Immersive</h6>
      <hr style={{width: '100%'}}></hr>
      <div className='education'>
        <a href='https://www.hackreactor.com/'><div className='hackreactorlogo'><img src={hackreactor} alt='SQL Logo'/></div></a>
        
        <div className='education_text'>
          <h6>Dates attended 2020 – 2020</h6>
          <ul>
            <li>
              <p>
                Hack Reactor is the premier immersive software developer program focused on training full-stack software engineers and making experts in Javascript and Node.js.         
              </p>  
            </li> 
            <li>
              <p>
                Each student works over 70+ hours a week for 13 weeks through a variety of computer science concepts and work on projects of interest to continue development and build their portfolio.
              </p>
            </li>
          </ul>
        </div>        

          
      </div>
    </div>
  </div>
  )
}



/* 

 
*/

export default DriversLiscence