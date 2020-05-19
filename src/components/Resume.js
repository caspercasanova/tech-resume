import React,{useState} from 'react'

import Story from './Story.js'
import Wave from './Wave.js'

import awsLogo from '../pics/aws-2.svg'
import mongoLogo from '../pics/mongodb.svg'
import psqlLogo from '../pics/postgresql.svg'
import mysqllogo from '../pics/mysql-5.svg'

import profilePic from '../pics/profilePic.jpg'

export default function Resume() {
  const [component, setComponent] = useState('Story')
  return (
    <>
      <Header />
      <Navagation setComponent={setComponent}/>
      <Body component={component} />
      <Footer />
    </>
  )
}
const Header = () => {
  return (
  <div className='header tray'>
    <div className='txt_row'>
      <h3>Nicholas Lopez</h3>
    </div>
    <p>Software Developer/Engineer</p>
    <div className='txt_row'>
      <h6>Phone </h6>
      <a href="tel:1-310-977-3170">1-310-977-3170</a>
    </div>
    <div className='txt_row'>
      <h6>Email </h6>
      <a href='mailto:nhjlopez@gmail.com'>nhjlopez@gmail.com</a>
    </div>
  </div>

  )
}
const Navagation = ({setComponent}) => {

  return(
  <div className='tray'>
    <div>
      <button onClick={() => setComponent('Story')}>Story</button>
      <button onClick={() => setComponent('Art')}>Art</button>
      <button onClick={() => setComponent('Journal')}>Journal</button>
      <button onClick={() => setComponent('Skillz')}>Skillz</button>
      <button onClick={() => setComponent('Contact')}>Contact</button>
    </div>
  </div>
  )
}

const Body = ({component}) => {
  
  return(
    <div className='center_content_body'>
      {component === 'Story' && <Story />}
      {component === 'Skillz' && <Technologies />}
      {component === 'Contact' && <Contact />}  
    </div>
  )
}




const Contact = () => {
  return (
    <div className='contact'>
      <div className='tray' style={{width: '100%'}} >
        <div className='txt_row driverslicense_header'>
          <h3>C A L I F O R N I A</h3>
          <p>S O F T W A R E  E N G I N E E R</p>
        </div>
        <hr />
        <div className='driverslicense_body'>
          <div className='profile_pic' style={{textAlign: 'center'}}>
            <img src={profilePic} alt='profile'/>
            <h6 style={{fontFamily: 'Comic Sans MS'}}>NLopez</h6>
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
              <h6 style={{color: 'var(--color-rare)'}}>Resume</h6>
              <a download href={profilePic}>Resume.pdf</a>
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
          </div>
        </div>
        <div className='driverslicense_body_footer'>
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
          <div className='driverslicense_body_footer_item'>
            <h6>HGT</h6>
            <p>5'-09''</p>
          </div>
          <div className='driverslicense_body_footer_item'>
            <h6>WGT</h6>
            <p>150lb</p>
          </div>
        </div>
      <Wave />

    </div>
  </div>
  )
}






const Technologies = () =>{
  return (
  <div className='tray technologies'>
    <h3>Technologies</h3>
    <div className='technologies_body'>
      <h6>Frontend Technologies</h6>
      <hr style={{width: '100%'}}></hr>
      <div className='frontend'>
        <span><i className="fab fa-js"></i></span>
        <span><i className="fab fa-node"></i></span>
        <span><i className="fab fa-react"></i></span>
        <span><i className="fab fa-html5"></i></span>
        <span><i className="fab fa-css3-alt"></i></span>
        <span><i className="fab fa-adobe"></i></span>
      </div>
      <h6>Backend Technologies</h6>
      <hr style={{width: '100%'}}></hr>
      <div className='backend'>
        <div className='backend_logos'><img src={awsLogo} alt='AWS LOGO'/></div>
        <div className='backend_logos' style={{width: '80px' }}><img src={psqlLogo} alt='PSQL LOGO'/></div>
        <div className='backend_logos' style={{width: '150px'}}><img src={mongoLogo} alt='MONGO LOGO'/></div>
        <div className='backend_logos' style={{width: '110px'}}><img src={mysqllogo} alt='SQL Logo'/></div>
      </div>
    </div>
  </div>
  )
}


const Footer = () => {
  let date = new Date();
  return (
    <footer className='tray footer'>
      <div className=''>
        <a href='https://www.linkedin.com/in/310-nicholas-lopez/'><i className="fab fa-linkedin-in"></i></a>
        <a href='https://github.com/caspercasanova'><i className="fab fa-github"></i></a>
      </div>
      <p>
        CopyWrite {date.getFullYear()}
      </p>
    </footer>
  )
}