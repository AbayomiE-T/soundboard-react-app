import React, { Component } from 'react';
import Board from './Board';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { playBodilySounds } from '../actions/soundActions'

class BodilySounds extends Component {
  render() {
    //console.log(this.props)
    const sounds = this.props.sounds;

    if (sounds) {
      return (<div>
        <Board sounds={this.props.sounds} playSound={this.props.playBodilySounds} profileName="Bodily sounds" />
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
  console.log(state.firestore)
  return {
    sounds: state.firestore.ordered.bodilySounds || null

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playBodilySounds: (id) => dispatch(playBodilySounds(id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'bodilySounds' }
  ])
)(BodilySounds)

//export default BodilySounds