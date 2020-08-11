import React,{useState} from 'react';
import './App.scss';
import art1 from './art/5elementVaporized.png'
import art2 from './art/Artboard 1.png'
import art3 from './art/Face-grid 002.png'
import art4 from './art/la_80s_outline.png'
import art5 from './art/LA_OUTLINE_VAPORIZED_REWORKTREES.png'
import art7 from './art/newsonus.png'
import art8 from './art/pipedreamz.png'
import art9 from './art/untitledFace001.png'
import art10 from './art/untitledFace002.png'
import art11 from './art/untitledFace003.png'
import art12 from './art/untitledFace004.png'




import DriversLicense from './components/DriversLicense';

function App() {
  const [modal, toggleModal] = useState(false)
  const [currentArtPiece, setCurrentArtPiece] = useState(art1)
  const artPieces = [art1, art2, art3, art4, art5,  art7, art8, art9, art10, art11, art12]
 
  return (
    <>
      <div className="App">
          <DriversLicense artPieces={artPieces} setCurrentArtPiece={setCurrentArtPiece} toggleModal={toggleModal} />
          {console.log(`%c${secretMessage}`, 'color: cyan; font-weight: bold;')}
      </div>
      {modal && <Modal artPiece={currentArtPiece} toggleModal={() => toggleModal(false)}/>}
    </>
  );
}

const Modal = ({artPiece, toggleModal}) => {
  return(
    <div className='modal_background'>
      <div className='modal'>
        <div className='modal_header'>
          <h1>Some Art I Made</h1>
          <button onClick={toggleModal}>Exit</button>
        </div>
        <div className='modal_img'>
          <img src={artPiece}  alt={artPiece} />
        </div>
      </div>
    </div>
  )
}

export default App;


const secretMessage = 'Please Hire Me! 1-310-977-3170 :))\nAlso I Have A Little Secret Hidden On The Site; Do You Think You Can Find It? \n\nHere Is A Hint:\n\nBefore The first\nAfter The Last\nNothing Between\nNo Shadows Cast\n\nWhat Am I ??'