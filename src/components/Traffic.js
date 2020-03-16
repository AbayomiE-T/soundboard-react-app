import React, { Component } from 'react';
import Board from './Board';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { playTraffic } from '../actions/playTraffic'

class Traffic extends Component{
    render(){
        //console.log(this.props)
        const sounds = this.props.sounds;
  
        if (sounds){
          return(<Board sounds={this.props.sounds} playSound={this.props.playTraffic}/>)
        }
  
        else{
          return(
            <div className="container center">
            <p>Loading project...</p>
          </div>
          )
        }
      }
  }
  
  const mapStateToProps = (state, ownProps) => {
  
      return {
        sounds: state.firestore.ordered.traffic || null
        
      }
    }
  
  const mapDispatchToProps = (dispatch) => {
      return {
        playTraffic: (id) => dispatch(playTraffic(id))
      }
    }
  
    export default compose(
      connect(mapStateToProps,mapDispatchToProps),
      firestoreConnect([
        { collection: 'traffic' }
      ])
    )(Traffic)