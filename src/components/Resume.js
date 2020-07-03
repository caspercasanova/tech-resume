import React from 'react'

import Story from './Story.js'

import Countdown from './Countdown'
import DriversLiscence from './DriversLiscence'


export default function Resume() {
 
  return (
    <>
      <Header />
      <Navagation />
      <Body  />
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
    <div className='txt_row'>
      <h6 style={{color: 'var(--color-legendary)'}}>Resume</h6>
      <a download href={'/Nicholas Lopez Resume v2.pdf'}  style={{color: 'var(--color-legendary)'}}>[ Download ] Resume.pdf</a>
    </div>
  </div>

  )
}
const Navagation = () => {

  return(
  <div className='tray'>
      <Countdown />
  </div>
  )
}

const Body = () => {
  
  return(
    <div className='center_content_body'>
       <Story />
       <DriversLiscence />
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