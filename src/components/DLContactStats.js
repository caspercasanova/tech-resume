import React from 'react'

export default function DLContactStats() {
  return (
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
        <h6>Occupation</h6>
        <div style={{textAlign: 'end'}}>
          <p>Software Engineer</p>
        </div>
      </div>
      <div className='txt_row'>
        <h6 style={{color: 'var(--color-legendary)'}}>Resume</h6>
        <a download href={'/Nicholas Lopez Resume v2.pdf'}  style={{color: 'var(--color-legendary)'}}>
              <div style={{textAlign: 'center'}}>
                  <p style={{color: 'var(--color-legendary)'}}>[ Download ]</p>
                  <p style={{color: 'var(--color-legendary)'}}>Resume.pdf</p>
                </div>
        </a>
      </div>
    </div>
  )
}
