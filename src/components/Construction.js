import React, { Component } from 'react';
import Board from './Board';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { playConstruction } from '../actions/soundActions'

class Construction extends Component {
  render() {
    //console.log(this.props)
    const sounds = this.props.sounds;

    if (sounds) {
      return (<div>
        <Board sounds={this.props.sounds} playSound={this.props.playConstruction} profileName="Construction" />
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