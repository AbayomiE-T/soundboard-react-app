import React, { Component } from 'react';
import Board from './Board';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { playAnimals } from '../actions/soundActions'

class Animals extends Component {
  render() {
    //console.log(this.props)
    const sounds = this.props.sounds;

    if (sounds) {
      return (<div className="board">
        <Board sounds={this.props.sounds} playSound={this.props.playAnimals} profileName="Animals" />
      </div>
      )
    }

    else {
      return (<div className="container center">
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
    playAnimals: (id) => dispatch(playAnimals(id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'animals' }
  ])
)(Animals)