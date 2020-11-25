import React, { Component } from 'react';
import Board from './Board';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { playBells } from '../actions/soundActions'

class Bells extends Component {
  render() {
    //console.log(this.props)
    const sounds = this.props.sounds;

    if (sounds) {
      return (<div>
        <Board sounds={this.props.sounds} playSound={this.props.playBells} profileName="Bells" />
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
    sounds: state.firestore.ordered.bells || null

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playBells: (id) => dispatch(playBells(id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'bells' }
  ])
)(Bells)

//export default Bells