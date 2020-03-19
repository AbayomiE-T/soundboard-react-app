import React, { Component } from 'react';
import Board from './Board';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { playClocks } from '../actions/playClocks'
import {addSoundAction} from '../actions/addSoundAction'
import AddSound from './AddSound'

class Clocks extends Component{
    render(){
        //console.log(this.props)
        const sounds = this.props.sounds;
  
        if (sounds){
          return(<div>
                  <Board sounds={this.props.sounds} playSound={this.props.playClocks}/>
                  <AddSound createSound={this.props.addSoundAction} collectionName="clocks"/>
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
        sounds: state.firestore.ordered.clocks || null
        
      }
    }
  
  const mapDispatchToProps = (dispatch) => {
      return {
        playClocks: (id) => dispatch(playClocks(id)),
        addSoundAction: (newSound, collectionName) => dispatch(addSoundAction(newSound, collectionName))
      }
    }
  
    export default compose(
      connect(mapStateToProps,mapDispatchToProps),
      firestoreConnect([
        { collection: 'clocks' }
      ])
    )(Clocks)

//export default Clocks