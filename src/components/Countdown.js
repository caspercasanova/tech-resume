import React,{useState} from 'react'
import useInterval from './utils'

export default function Countdown(){
  const calculateTimeLeft = () => {
    const difference = new Date('2020-09-11') - new Date();
    let timeLeft = {};

    if(difference > 0){
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60) 
      }
    }
    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useInterval(()=>{
    setTimeLeft(calculateTimeLeft())
  }, 1000)


  const timerComponents = []

  Object.keys(timeLeft).forEach((interval, index) => {

    timerComponents.push(
      <div key={index} className='interval'>
        <div><p>{interval <= 9 ? `0${interval}` : interval}</p></div>
        <div><p>{timeLeft[interval] <= 9 ? `0${timeLeft[interval]}` : timeLeft[interval]}</p></div>
      </div>
    )
  })

  return(
    <div className='countdown'>
      <h4>Time Until NSA Launch</h4>
      <div className='countdown_body'>
        {timerComponents.length && timerComponents}
      </div>

      <a href='newsenseactive.com'>NewSenseActive.com</a>
    </div>
  )
}