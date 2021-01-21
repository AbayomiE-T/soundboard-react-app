import React, { Component } from 'react';
import Board from './Board';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import instruments from '../album covers/instruments.jpg'

class MusicInstruments extends Component {
  render() {
    //console.log(this.props)
    const sounds = this.props.sounds;

    if (sounds) {
      return (<div className="board">
        <div className="album-cover">
          <div className="image">
            <img src={instruments} alt="" />
          </div>
          <div className="description">
            <div>
              <span>ALBUM</span>
              <h1>MUSIC INSTRUMENTS</h1>
              <p>{this.props.sounds.length} songs</p>
            </div>
          </div>
        </div>
        <Board sounds={this.props.sounds} />
      </div>
      )
    }

    else {
      return (
        <p style={{ textAlign: 'çenter', color: 'white' }}>Loading sounds...</p>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {

  return {
    sounds: state.firestore.ordered.musicInstruments || null

  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'musicInstruments' }
  ])
)(MusicInstruments)