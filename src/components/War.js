import React, { Component } from 'react';
import Board from './Board';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { playWar } from '../actions/playWar'
import {addSoundAction} from '../actions/addSoundAction'
import AddSound from './AddSound'

class War extends Component{
    render(){
        //console.log(this.props)
        const sounds = this.props.sounds;
  
        if (sounds){
          return(<div>
                  <Board sounds={this.props.sounds} playSound={this.props.playWar} profileName = "War"/>
                  <AddSound createSound={this.props.addSoundAction} collectionName="war"/>
                </div>
            )
        }
  
        else{
          return(
            <div className="container center">
            <p>Loading sounds...</p>
          </div>
          )
        }
      }
  }
  
  const mapStateToProps = (state, ownProps) => {
  
      return {
        sounds: state.firestore.ordered.war || null
        
      }
    }
  
  const mapDispatchToProps = (dispatch) => {
      return {
        playWar: (id) => dispatch(playWar(id)),
        addSoundAction: (newSound, collectionName) => dispatch(addSoundAction(newSound, collectionName))

      }
    }
  
    export default compose(
      connect(mapStateToProps,mapDispatchToProps),
      firestoreConnect([
        { collection: 'war' }
      ])
    )(War)