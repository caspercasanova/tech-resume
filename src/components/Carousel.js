import React,{useState} from 'react'

export default function Carousel({children}){
  const [itemIndex, setItemIndex] = useState(0)
  
  let items = [...children]
  let buttons = []

  items.forEach((component, index) => {
    if(itemIndex === index){
      buttons.push(
        <button className='slider_btn active' key={index} onClick={()=>setItemIndex(index)} />
      )
    } else {
      buttons.push(
        <button className='slider_btn inactive' key={index} onClick={()=>setItemIndex(index)} />
      )
    }
  })

  let cycleWithArrows = (num) => {
    if(num > 0){
      if(itemIndex + num === items.length){setItemIndex(0)
      } else {
        setItemIndex(itemIndex + num)
      }
    }  

    if(num < 0){
      if(itemIndex + num === -1){
        setItemIndex(items.length - 1)
      } else {
        setItemIndex(itemIndex + num)
      }
    }
  }


  return(
    <div className='slider'>
      
      <div className='slider_btn_container'>
        <button onClick={() => cycleWithArrows(-1)}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
        <button onClick={() => cycleWithArrows(1)}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
      </div>
      
      <div className='slider_block_container'>
        {buttons.length && buttons}
      </div>
      
      {items[itemIndex]}
      
    </div>
  )
}
