import React, { Component } from 'react';
import Board from './Board';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { playBells } from '../actions/playBells'
import {addSoundAction} from '../actions/addSoundAction'
import AddSound from './AddSound'

class Bells extends Component{
    render(){
        //console.log(this.props)
        const sounds = this.props.sounds;
  
        if (sounds){
          return(<div>
                  <Board sounds={this.props.sounds} playSound={this.props.playBells} profileName = "Bells"/>
                  <AddSound createSound={this.props.addSoundAction} collectionName="bells"/>
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
        sounds: state.firestore.ordered.bells || null
        
      }
    }
  
  const mapDispatchToProps = (dispatch) => {
      return {
        playBells: (id) => dispatch(playBells(id)),
        addSoundAction: (newSound, collectionName) => dispatch(addSoundAction(newSound, collectionName))
      }
    }
  
    export default compose(
      connect(mapStateToProps,mapDispatchToProps),
      firestoreConnect([
        { collection: 'bells' }
      ])
    )(Bells)

//export default Bells