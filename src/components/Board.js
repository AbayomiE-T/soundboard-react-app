import React from 'react';

const Board = ({sounds, playSound, profileName}) =>{

      const soundList = sounds.map(sound =>{
        return(
          <div className="container" key={sound.id}>
            <button className="btn" onClick={() => playSound(sound.id)}>{sound.soundName}</button>
         </div>
        )
      })
  
      return(
        <div className="sound-list">
          <h3>Welcome to the {profileName} page</h3>
          {soundList}
        </div>
      )
    }



export default Board;