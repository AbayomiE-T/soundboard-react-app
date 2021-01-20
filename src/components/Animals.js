import React, { Component } from 'react';
import Board from './Board';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { playAnimals } from '../actions/soundActions'
import farm from '../album covers/farm.jpeg'

class Animals extends Component {
  render() {
    const sounds = this.props.sounds;

    if (sounds) {
      return (<div className="board">
        <div className="album-cover">
          <div className="image">
            <img src={farm} alt="" />
          </div>
          <div className="description">
            <div>
              <span>ALBUM</span>
              <h1>ANIMALS</h1>
              <p>{this.props.sounds.length} songs</p>
            </div>
          </div>
        </div>
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