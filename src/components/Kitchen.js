import React, { Component } from 'react';
import Board from './Board';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { playKitchen } from '../actions/soundActions'
import kitchen from '../album covers/kitchen.jpg'

class Kitchen extends Component {
  render() {
    //console.log(this.props)
    const sounds = this.props.sounds;

    if (sounds) {
      return (<div className="board">
        <div className="album-cover">
          <div className="image">
            <img src={kitchen} alt="" />
          </div>
          <div className="description">
            <div>
              <span>ALBUM</span>
              <h1>KITCHEN</h1>
              <p>{this.props.sounds.length} songs</p>
            </div>
          </div>
        </div>
        <Board sounds={this.props.sounds} playSound={this.props.playKitchen} profileName="Kitchen" />
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
    sounds: state.firestore.ordered.kitchen || null

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playKitchen: (id) => dispatch(playKitchen(id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'kitchen' }
  ])
)(Kitchen)