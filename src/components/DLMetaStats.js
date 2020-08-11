import React from 'react'

export default function DLMetaStats() {
  return (
    <div className='DLMetaStats'>
      <div>
        <div className='txt_row'>
          <h6>SEX</h6>
          <p>M</p>
        </div>
        <div className='txt_row'>
          <h6>HAIR</h6>
          <p>BLK</p>
        </div>
        <div className='txt_row'>
          <h6>EYES</h6>
          <p>HZL</p>
        </div>
      </div>
      <div>
      <div className='txt_row'>
        <h6>HGT</h6>
        <p>5'-09''</p>
      </div>
      <div className='txt_row'>
        <h6>WGT</h6>
        <p>150lb</p>
      </div>
      <div className='txt_row'>
        <h6>Y.O.</h6>
        <p>26</p>
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
  </div>
  )
}



