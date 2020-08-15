import React from 'react'
import awsLogo from '../pics/aws-2.svg'
import mongoLogo from '../pics/mongodb.svg'
import psqlLogo from '../pics/postgresql.svg'
import mysqllogo from '../pics/mysql-5.svg'

const Technologies = () =>{


  return (
  <div className='technologies'>
    <h3>Technologies</h3>
    <h6>Frontend Technologies</h6>
    <hr style={{width: '100%'}}></hr>
    <div className='technologies_body'>
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

export default Technologies