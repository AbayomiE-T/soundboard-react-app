import React, { Component } from 'react';
import Profiles from './components/Profiles';
import Board from './Board';
import StarWars from './components/StarWars';
import Memes from './components/Memes';
import Comedy from './components/Comedy';
import Animals from './components/Animals';
import School from './components/School';
import Construction from './components/Construction';
import Office from './components/Office';
import Videogames from './components/Videogames';
import Traffic from './components/Traffic';
import Disaster from './components/Disaster';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

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
      <BrowserRouter>
        <div className="App">
          <h1>My first react app</h1>
          <p>Welcome to my soundboard!</p>
          <Profiles/>
          <Switch>
            <Route path='/star-wars' component={StarWars} />
            <Route path='/memes' component={Memes} />
            <Route path='/comedy' component={Comedy} />
            <Route path='/animals' component={Animals} />
            <Route path='/school' component={School} />
            <Route path='/construction' component={Construction} />
            <Route path='/office' component={Office} />
            <Route path='/videogames' component={Videogames} />
            <Route path='/traffic' component={Traffic} />
            <Route path='/disaster' component={Disaster} />

            <Board sounds={this.state.sounds} playSound={this.playSound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
    }
}

export default App;
