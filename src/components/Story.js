import React from 'react'
import Carousel from './Carousel'

export default function Story(){
  let beginning = new Date("8/30/2012")
  let current = new Date()
  let differenceInTime = current.getTime() - beginning.getTime(); 
  let differenceInDays = differenceInTime / (1000 * 3600 * 24);
  let numberOfCoffees = 3.2 * differenceInDays;
  let numberOfHoursAtGym = (differenceInDays / 7) * 3.5;

  let codeBeginning = new Date("10/15/2018")
  let differenceInTimeCode = current.getTime() - codeBeginning.getTime()
  let differenceInDaysCode = differenceInTimeCode / (1000 * 3600 * 24);
  let numberOfCodeHours = 3.3 * differenceInDaysCode;


  let avgBreathsPerDay = Math.floor(Math.random() * (23040-17280) + 17280)
  let birth = new Date("4/27/1994")
  let differenceInBirth = current.getTime() - birth.getTime()
  let differenceInDaysBirth = differenceInBirth / (1000 * 3600 * 24);
  let numberOfBreathsTaken = avgBreathsPerDay * differenceInDaysBirth;



  const Intro = () => {
    return(
      <>
        <p>Suh.<br></br> I'm Nicholas, a web technologist fascinated with the intersection of physical and digital worlds.</p>
          <br /><br />
          <p>My <i>JOURNEY</i> with code started in Oct 2018 when a friend challenged my to pick it up. With some jedi mind trickery, he was able to motivate me into learning Python as my first programming language.</p><br /><br />
          <p>My initial steps were...lackadaisical, to say the least, I would go to the library spend about an hour looking at CodeWars challenges for Python, then leave.</p><br /><br />
          <p>That All Changed In March 2019...</p>
          <div className='txt_row'>
              <h6>
              Number of breaths taken since 1994:
              </h6> 
              <p>
                {numberOfBreathsTaken.toPrecision(4)}
              </p>
          </div>
      </>
    )
  }
  const RampUp =() => {
    return(
      <>
        <p>I got serious, cut all things out, and devoted my attention to code. My mentor, the Jedi Master who prefers to remain unnamed, got me up to speed in a rapid pace, showing me common pitfalls in the understanding/discovery process. He would walk through things slowly and concise, explaining things so clearly a novice could understand, signs of a true expert.</p><br /><br />
        <p>He 100% believed in my potential and as such I did as well.</p><br /><br />
        <p>After roughly 6 months of training, dissecting React and the JavaScript language itself, I had reached a level, which I believe, had properly established programmatic fundamentals, but I needed more....</p><br /><br />
        <p>Around Oct if 2019 I had decided it was time for to attend a bootcamp. Hack Reactor in Los Angeles caught my eye, and so began the work for getting <i>ACCEPTED</i> into the program. This is were the refinement of my skills occurred. Hack Reactor had an the type of work I needed. Repition.</p><br /><br />
        <div className='txt_row'>
            <h6>
            Hours<i style={{paddingLeft: '4px', paddingRight: '4px', letterSpacing: '3px'}}>(3.5 per wk)</i> spent at the gym since 2012:
            </h6> 
            <p>
              {numberOfHoursAtGym.toPrecision(7)}
            </p>
        </div>
        <br /><br />
      </>
    )
  }
  const HackReactor = () => {
    return(
      <>
        <p>From Oct to Dec, I was a full time student, eating the JS community. I leveredaged MDN, FreeCodeCamp, and Youtube, as well as other resources like Frontend Masters and Scrimba. I became noctural. Really. Woke up at 1pm and slept at 6am. Quite a time. Next thing I know, class starts tomorrow.</p><br /><br />
        <p>Hack Reactor was an interesting experience. I prefer accellerated coursework and have always excelled in situations like that. Coding...ALL DAY 'n' Night. It was awesome.</p><br /><br />
        <p>Corona 2020:</p>
        <div className='txt_row'>
            <h6>
            Estimated cups of coffee drank since I started drinking in 2012:
            </h6> 
            <p>
              {numberOfCoffees.toPrecision(7)}
            </p>
        </div>
        <br /><br />
      </>
    )
  }
  const Closing = () => {
    return(
      <>
          <p>For me this is where I saw my work pace/ethic slow. The Hack Reactor had decided the learning would have to be done remotely and I found myself slacking. Perhaps it was the <b>Pandemic</b> or maybe my home environment, either way, not ideal for me and my journey.</p><br /><br /> 
          <p>I graduated Hack Reactors Software Immersive in May 2020, meaning that my coding journey with Javascript had been exactly 1 year. In that time I had built full stack apps with beatiful frontends. I had reached a certain subconciouss goal of mine, which was self sufficiency in a web development.</p><br/><br/>
          
          <p>I'll end it there. This is long and not that crazy of a story, but it is mine.</p><br/><br/>
          <p>See ya 'round.</p>
          <div className='txt_row'>
              <h6>
              Hours spent coding since Oct 2018:
              </h6> 
              <p>
                {numberOfCodeHours.toPrecision(7)}
              </p>
          </div>
      </>
    )
  }

  return(
    <div className='tray about'>
      <Carousel>
        <Intro />
        <RampUp />
        <HackReactor />
        <Closing />
      </Carousel>
    </div>
  )
}





