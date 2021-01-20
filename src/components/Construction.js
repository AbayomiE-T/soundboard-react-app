import React, { Component } from 'react';
import Board from './Board';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { playConstruction } from '../actions/soundActions'
import construction from '../album covers/construction.jpg'

class Construction extends Component {
  render() {
    //console.log(this.props)
    const sounds = this.props.sounds;

    if (sounds) {
      return (<div className="board">
        <div className="album-cover">
          <div className="image">
            <img src={construction} alt="" />
          </div>
          <div className="description">
            <div>
              <span>ALBUM</span>
              <h1>CONSTRUCTION</h1>
              <p>{this.props.sounds.length} songs</p>
            </div>
          </div>
        </div>
        <Board sounds={this.props.sounds} playSound={this.props.playConstruction} profileName="Construction" />
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
    sounds: state.firestore.ordered.construction || null

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playConstruction: (id) => dispatch(playConstruction(id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'construction' }
  ])
)(Construction)