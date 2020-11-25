import React, { Component } from 'react';
import Board from './Board';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { playMusic } from '../actions/soundActions'

class MusicInstruments extends Component {
  render() {
    //console.log(this.props)
    const sounds = this.props.sounds;

    if (sounds) {
      return (<div>
        <Board sounds={this.props.sounds} playSound={this.props.playMusic} profileName="Music Instruments" />
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
    sounds: state.firestore.ordered.musicInstruments || null

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playMusic: (id) => dispatch(playMusic(id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'musicInstruments' }
  ])
)(MusicInstruments)