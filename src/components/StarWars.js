import React, { Component } from 'react';
import Board from './Board';
import { connect } from 'react-redux'
import { playSound } from '../actions/playSound'

class StarWars extends Component{

    render(){
        return(<Board sounds={this.props.sounds} playSound={this.props.playSound}/>)
    }
}

const mapStateToProps = (state) => {
    return {
      sounds: state.sounds
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      playSound: (id) => dispatch(playSound(id))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(StarWars)