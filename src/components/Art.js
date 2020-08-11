import React from 'react'

export default function Art({artPieces, toggleModal, setCurrentArtPiece}) {
  return (
    <div className="Art">
      {artPieces.map((srcs, index) => (
        <Artworks key={index} index={index} photosrc={srcs} 
        onClickHandler={() => {
          setCurrentArtPiece(srcs)
          toggleModal(true)
        }}/>
      ))}
    </div>
  )
}



const Artworks = ({photosrc, index, onClickHandler}) => {
  return(
    <div onClick={onClickHandler} className='artworks'>
      <img src={photosrc} alt={`artwork-${index}`}/>
    </div>
  )
}