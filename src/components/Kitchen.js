import React, { Component } from 'react';
import Board from './Board';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { playKitchen } from '../actions/playKitchen'
import {addSoundAction} from '../actions/addSoundAction'
import AddSound from './AddSound'

class Kitchen extends Component{
    render(){
        //console.log(this.props)
        const sounds = this.props.sounds;
  
        if (sounds){
          return(<div>
                  <Board sounds={this.props.sounds} playSound={this.props.playKitchen}/>
                  <AddSound createSound={this.props.addSoundAction} collectionName="kitchen"/>
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
        sounds: state.firestore.ordered.kitchen || null
        
      }
    }
  
  const mapDispatchToProps = (dispatch) => {
      return {
        playKitchen: (id) => dispatch(playKitchen(id)),
        addSoundAction: (newSound, collectionName) => dispatch(addSoundAction(newSound, collectionName))
      }
    }
  
    export default compose(
      connect(mapStateToProps,mapDispatchToProps),
      firestoreConnect([
        { collection: 'kitchen' }
      ])
    )(Kitchen)