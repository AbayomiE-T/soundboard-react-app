import React, { Component } from 'react';
import Board from './Board';

class App extends Component {
  state = {
    sounds: [
        {id: 1, soundName: 'wow', soundSource: 'https://freesound.org/apiv2/sounds/48183/download', isClicked: false, sound:null},
        {id: 2, soundName: 'hey', soundSource: 'https://freesound.org/apiv2/sounds/30989/download', isClicked: false, sound: null}
    ]
  }

  playSound = (id) =>{

      let audio = this.state.sounds.find(snd =>{
        return snd.id === id;
      });

      if (audio.isClicked){
        audio.sound.pause();
        console.log("PAUSE");
      }
      
      audio.sound = new Audio(audio.soundSource);
      audio.isClicked = true;

      let soundArray = this.state.sounds;
      let index = soundArray.indexOf(audio);

      soundArray[index] = audio;
      
      this.setState({sounds: soundArray});
      
      console.log(audio.soundName + " is currently playing")
      audio.sound.play();
      
  }

  render(){
    return (
      <div className="App">
        <h1>My first react app</h1>
        <p>Welcome to my soundboard!</p>
        <Board sounds={this.state.sounds} playSound={this.playSound}/>
      </div>
    );
    }
}

export default App;
