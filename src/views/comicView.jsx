import React from 'react'
import comics from '../data/comicPortrait'

function ComicView() {
  
  return (
    <div>
      <h1>{comics.name}</h1>
      <h2>{comics.description}</h2>
      <img src={comics.image} alt={comics.name + " image"} />
    </div>
  )
}

export default ComicView