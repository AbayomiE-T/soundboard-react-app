import React, { Component } from 'react';
import Board from './Board';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { playWar } from '../actions/soundActions'
import war from '../album covers/war.jpg'

class War extends Component {
  render() {
    //console.log(this.props)
    const sounds = this.props.sounds;

    if (sounds) {
      return (<div className="board">
        <div className="album-cover">
          <div className="image">
            <img src={war} alt="" />
          </div>
          <div className="description">
            <div>
              <span>ALBUM</span>
              <h1>WAR</h1>
              <p>{this.props.sounds.length} songs</p>
            </div>
          </div>
        </div>
        <Board sounds={this.props.sounds} playSound={this.props.playWar} profileName="War" />
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
    sounds: state.firestore.ordered.war || null

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playWar: (id) => dispatch(playWar(id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'war' }
  ])
)(War)