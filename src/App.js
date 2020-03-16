import React, { Component } from 'react';
import Profiles from './components/Profiles';
import Scifi from './components/Scifi';
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

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <h1>My first react app</h1>
          <p>Welcome to my soundboard!</p>
          <Profiles/>
          <Switch>
            <Route path='/sci-fi' component={Scifi} />
            <Route path='/memes' component={Memes} />
            <Route path='/comedy' component={Comedy} />
            <Route path='/animals' component={Animals} />
            <Route path='/school' component={School} />
            <Route path='/construction' component={Construction} />
            <Route path='/office' component={Office} />
            <Route path='/videogames' component={Videogames} />
            <Route path='/traffic' component={Traffic} />
            <Route path='/disaster' component={Disaster} />
          </Switch>
        </div>
      </BrowserRouter>
    );
    }
}

export default App;
