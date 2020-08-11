import React from 'react'

const Divider = () => {
  return (
    <hr className='Divider'/>
  )
}

export default function About(){
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




  return(
    <div className='bio'>
      <article>
        <h3>Suh</h3>
        <h3>I'm Nicholas.</h3>
        <br />
        <br />
        <p>My <i>JOURNEY</i> with code started in Oct 2018 when a good friend on mine challenged me to a CodeWars Code Kata. With some jedi mind trickery, he was able to motivate me into learning Python as my first programming language.</p>
        <p>I was motivated and determined to figure out the solutions to these code challenges. Google was my ally and I tried my best to absorb the concepts of computer programming from as many resources as possible.</p>
        <h3>Things Changed In March 2019...</h3>
        <div className='txt_row'>
            <h6 style={{color: 'var(--color-legendary)'}}>
            Number of breaths taken since 1994:
            </h6> 
            <p style={{color: 'var(--color-legendary)'}}>
              {numberOfBreathsTaken.toPrecision(4)}
            </p>
        </div>
        <Divider />
      </article>

      <article>
        <p>I got <i> Mad Serious </i> with my learning regime, cut all unnecessary things out, and devoted my attention to code. My code mentor suggested I begin the new phase of my journey by mastering JavaScript. Scared and enthused, I told him I was ready to begin and he got me up to speed. He would walk through things slowly and concise, converting complexity to laymen absorption. A true wizard.</p>
        <h3>He believed in my potential and as a result, I did as well.</h3>
        <p>After roughly 6 months of struggle and turmoil, peaks and valleys, copy and pasting, I was starting to see the sphere of the JavaScript learning curve begin to straighten. I had read MDN, docs and blogs, jumped into codepens, and had finally made a github account. I was turning legit. I had developed decent programmatic fundamentals and had an inch of IOT experience, but I needed more….</p>
        <p>Around Oct of 2019 I had decided it was time for me to attend a bootcamp. Hack Reactor in Los Angeles caught my eye, and so began the course work for getting <i>ACCEPTED</i> into the program. This was when my JavaScript fluency really soared. Hack Reactor had the type of work I needed. Repetition.</p>
        
        <div className='txt_row'>
            <h6 style={{color: 'var(--color-legendary)'}}>
            Hours<i style={{paddingLeft: '4px', paddingRight: '4px', letterSpacing: '3px'}}>(3.5 per wk)</i> spent at the gym since 2012:
            </h6> 
            <p style={{color: 'var(--color-legendary)'}}>
              {numberOfHoursAtGym.toPrecision(7)}
            </p>
        </div>
        <Divider />
        
      </article>

      <article>
        <p>From Oct to Dec, I was a full time student, eating the JS community. I leveraged MDN, FreeCodeCamp, and Youtube, as well as other resources like Frontend Masters, Scrimba, Codepen, Github, and shit loads of blogs. I became nocturnal. Really. Woke up at 1pm and slept at 6am. Quite a time. Next thing I know, class starts tomorrow.</p>       <p>From Oct to Dec, I was a full time student, eating the JS community. I leveredaged MDN, FreeCodeCamp, and Youtube, as well as other resources like Frontend Masters and Scrimba. I became noctural. Really. Woke up at 1pm and slept at 6am. Quite a time. Next thing I know, class starts tomorrow.</p>
        
        <p>Hack Reactor was an interesting experience. I prefer accelerated coursework and have always excelled in situations like that. Coding...ALL DAY 'n' Night. It was awesome.</p>
        
        <p>Corona 2020:</p>
        <div className='txt_row'>
            <h6 style={{color: 'var(--color-legendary)'}}>
            Estimated cups of coffee drank since I started drinking in 2012:
            </h6> 
            <p style={{color: 'var(--color-legendary)'}}>
              {numberOfCoffees.toPrecision(7)}
            </p>
        </div>
        <Divider />
        
      </article>

      <article>
        <h3>”Grandpapa, what did you do during the great plague of the twenties?”</h3>
        <br />
        <h3>“I....I....Mastered JavaScript”</h3>
        <br />
        <p>The Covid experience was different for everyone. For me this is where I saw my work pace/ethic slow considerably. The Hack Reactor had decided the learning would have to be done remotely and I found myself slacking. Perhaps it was the <b>Pandemic</b> or maybe my home environment, either way, not ideal for me or my coding journey.</p>
        
        <p>I graduated Hack Reactors Software Immersive in May 2020, meaning that my coding journey with Javascript had been exactly 1 year. In that time I had built full stack apps with beatiful frontends. I had reached a certain subconciouss goal of mine, which was self sufficiency in a web development.</p>
        <p>I graduated Hack Reactor’s Software Immersive in May 2020, meaning that my coding journey with Javascript had been exactly 1 year. In that time I had built full stack apps with beautiful frontends and touched backend technology. It was a subconscious goal of mine to do so and I was happy I had improved my coding skillz. Most importantly I become Self Sufficient, completely autonomous and able to dissect technologies by myself.</p>
        <p>A wonderful check point. </p>
        <p>I'll end it there. This is long and not that crazy of a story, but it's mine.</p>
        <p>See ya 'round.</p>
        <div className='txt_row'>
            <h6 style={{color: 'var(--color-legendary)'}}>
            Hours spent coding since Oct 2018:
            </h6> 
            <p style={{color: 'var(--color-legendary)'}}>
              {numberOfCodeHours.toPrecision(7)}
            </p>
        </div>
        
      </article>
    </div>
  )
}





