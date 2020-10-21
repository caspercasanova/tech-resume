import React from 'react'
import ResumePDF from '../documents/Nicholas_Lopez_Resume.pdf'
export default function DLContactStats() {
  return (
    <div className='driverslicense_body_text'>
      <div>
        <div className='txt_row'>
          <h6>DOB</h6>
          <p>04/27/1994</p>
        </div>
        <div className='txt_row'>
          <h6>Y.O.</h6>
          <p>26</p>
        </div>
        <div className='txt_row'>
          <h6 style={{color: 'var(--color-legendary)'}}>Phone </h6>
          <a style={{color: 'var(--color-legendary)'}} href="tel:1-310-977-3170">1-310-977-3170</a>
        </div>
        <div className='txt_row'>
          <h6 style={{color: 'var(--color-legendary)'}}>Email </h6>
          <a style={{color: 'var(--color-legendary)'}} href='mailto:nhjlopez@gmail.com'>nhjlopez@gmail.com</a>
        </div>
        <div className='txt_row'>
          <h6>ADDR</h6>
          <p>REDONDO BCH.</p>
        </div>
      </div>

      <hr style={{marginBottom: '3px'}}/>
      <div className='txt_row'>
        <h6>Occupation</h6>
        <div style={{textAlign: 'end'}}>
          <p>Software Engineer</p>
        </div>
      </div>
      <div className='txt_row'>
        <h6 style={{color: 'var(--color-legendary)'}}>Resume</h6>
        <a download href={ResumePDF}  style={{color: 'var(--color-legendary)'}}>
          <div style={{textAlign: 'center'}}>
            <p style={{color: 'var(--color-legendary)'}}>[ Download ]</p>
            <p style={{color: 'var(--color-legendary)'}}>Resume.pdf</p>
          </div>
        </a>
      </div>
    </div>
  )
}
