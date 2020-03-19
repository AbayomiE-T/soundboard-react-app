import React, { Component } from 'react';
import Board from './Board';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { playAnimals } from '../actions/playAnimals'
import {addSoundAction} from '../actions/addSoundAction'
import AddSound from './AddSound'

class Animals extends Component{
    render(){
        //console.log(this.props)
        const sounds = this.props.sounds;
  
        if (sounds){
          return(<div>
                  <Board sounds={this.props.sounds} playSound={this.props.playAnimals}/>
                  <AddSound createSound={this.props.addSoundAction} collectionName="animals"/>
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
        sounds: state.firestore.ordered.animals || null
        
      }
    }
  
  const mapDispatchToProps = (dispatch) => {
      return {
        playAnimals: (id) => dispatch(playAnimals(id)),
        addSoundAction: (newSound, collectionName) => dispatch(addSoundAction(newSound, collectionName))
      }
    }
  
    export default compose(
      connect(mapStateToProps,mapDispatchToProps),
      firestoreConnect([
        { collection: 'animals' }
      ])
    )(Animals)
//export default Animals