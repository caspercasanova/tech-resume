import React from 'react'
import hackreactor from '../pics/hackreactor.svg'


export default function Education() {
  return (
    <div className='education'>
      <h3>Hack Reactor</h3>
      <div className='education_body'>
        <h6>Computer Software Engineering Immersive</h6>
        <hr style={{width: '100%'}}></hr>
        <div className='education_text'>
          <a href='https://www.hackreactor.com/'><div className='hackreactorlogo'><img src={hackreactor} alt='SQL Logo'/></div></a>
          
          <div className='education_text_body'>
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
