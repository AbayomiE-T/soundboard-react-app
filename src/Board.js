import React from 'react';

const Board = ({sounds, playSound}) =>{

      const soundList = sounds.map(sound =>{
        return(
          <div className="board" key={sound.id}>
            <button onClick={() => playSound(sound.id)}>Sound name: {sound.soundName}</button>
         </div>
        )
      })
  
      return(
        <div className="sound-list">
          {soundList}
        </div>
      )
    }



export default Board;