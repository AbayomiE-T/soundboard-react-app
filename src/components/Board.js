import React from 'react';

const Board = ({sounds, playSound, profileName}) =>{

      const soundList = sounds.map(sound =>{
        return(
          <div key={sound.id}>
            <button className="btn" onClick={() => playSound(sound.id)}>{sound.soundName}</button>
         </div>
        )
      })
  
      return(
        <div className="sound-list">
          <h3>Welcome to the {profileName} page</h3>
            <div className="btn-container">
              {soundList}
            </div>
        </div>
      )
    }



export default Board;