import React, { Component } from 'react';
import Board from './Board';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { playKitchen } from '../actions/soundActions'

class Kitchen extends Component {
  render() {
    //console.log(this.props)
    const sounds = this.props.sounds;

    if (sounds) {
      return (<div>
        <Board sounds={this.props.sounds} playSound={this.props.playKitchen} profileName="Kitchen" />
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