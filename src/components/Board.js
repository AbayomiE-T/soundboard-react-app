import React from 'react';

const Board = ({ sounds, playSound, profileName }) => {

  const soundList = sounds.map(sound => {
    return (
      <div onClick={() => playSound(sound.id)} className="song" key={sound.id}>
        <span>{sound.soundName}</span>
        <div>
          <i className='fas fa-play'></i>
        </div>
      </div>
    )
  })

  return (
    <>
      <div className="track-list">
        <div class="song">
          <h1>TITLE</h1>
        </div>
        {soundList}
      </div>
    </>
  )
}



export default Board;