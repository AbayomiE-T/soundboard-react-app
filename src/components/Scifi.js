import React, { Component } from 'react';
import Board from './Board';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { playScifi } from '../actions/playScifi'
import {addSoundAction} from '../actions/addSoundAction'
import AddSound from './AddSound'

class Scifi extends Component{
    

    render(){
      //console.log(this.props)
      const sounds = this.props.sounds;

      if (sounds){
        return(<div>
                <Board sounds={this.props.sounds} playSound={this.props.playScifi} profileName = "Scifi"/>
                <AddSound createSound={this.props.addSoundAction} collectionName="scifi"/>
              </div>
          )
      }

      else{
        return(<div className="container center">
                <p>Loading sounds...</p>
              </div>
        )
      }
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
      sounds: state.firestore.ordered.scifi || null
      
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      playScifi: (id) => dispatch(playScifi(id)),
      addSoundAction: (newSound, collectionName) => dispatch(addSoundAction(newSound, collectionName))
    }
  }

  export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
      { collection: 'scifi' }
    ])
  )(Scifi)
  
  //export default connect(mapStateToProps, mapDispatchToProps)(StarWars)