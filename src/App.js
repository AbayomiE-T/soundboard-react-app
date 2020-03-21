import React, { Component } from 'react';
import Profiles from './components/Profiles';
import Scifi from './components/Scifi';
import Animals from './components/Animals';
import Bells from './components/Bells';
import BodilySounds from './components/BodilySounds';
import Clocks from './components/Clocks';
import Construction from './components/Construction';
import Office from './components/Office';
import Kitchen from './components/Kitchen';
import MusicInstruments from './components/MusicInstruments';
import War from './components/War';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Profiles/>
          <Switch>
            <Route path='/scifi' component={Scifi} />
            <Route path='/bodily-sounds' component={BodilySounds} />
            <Route path='/bells' component={Bells} />
            <Route path='/animals' component={Animals} />
            <Route path='/clocks' component={Clocks} />
            <Route path='/construction' component={Construction} />
            <Route path='/office' component={Office} />
            <Route path='/kitchen' component={Kitchen} />
            <Route path='/music-instruments' component={MusicInstruments} />
            <Route path='/war' component={War} />
          </Switch>
        </div>
      </BrowserRouter>
    );
    }
}

export default App;
