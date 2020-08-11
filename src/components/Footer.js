import React from 'react'
import Wave from 'react-wavify'






export default function Footer() {
  let date = new Date();
  return (
    <footer className='footer'>
     
      <div className='footer_wave'>
        <Wave fill='#f79902'
            paused={false}
            options={{
              height: 50,
              amplitude: 30,
              speed: 0.15,
              points: 5
            }}/> 

        <div className='footer_contact'>
          <div>
            <a href='https://www.linkedin.com/in/310-nicholas-lopez/'><i className="fab fa-linkedin-in"></i></a>
            <a href='https://github.com/caspercasanova'><i className="fab fa-github"></i></a>
          </div>
          <p>
            CopyWrite {date.getFullYear()}
          </p>
        </div>
      </div>
      

    </footer>   
  )
}
