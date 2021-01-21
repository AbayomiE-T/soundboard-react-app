import React from 'react';
import Button from './Button';

const Board = ({ sounds }) => {

  const soundList = sounds.map(sound => {
    return (
      <Button soundName={sound.soundName}
        source={sound.soundSource}
        key={sound.id} />
    )
  })

  return (
    <>
      <div className="track-list">
        <div className="song">
          <h1>TITLE</h1>
        </div>
        {soundList}
      </div>
    </>
  )
}



export default Board;