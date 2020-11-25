import React from 'react';

const Board = ({ sounds, playSound, profileName }) => {

  const soundList = sounds.map(sound => {
    return (
      <div className="btn-container" key={sound.id}>
        <button className="btn" onClick={() => playSound(sound.id)}>{sound.soundName}</button>
      </div>
    )
  })

  return (
    <>
      <h3>Welcome to the {profileName} page</h3>
      <div className="sound-list">
        {soundList}
      </div>
    </>
  )
}



export default Board;