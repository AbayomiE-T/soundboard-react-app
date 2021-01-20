import React, { Component } from 'react';
import Board from './Board';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { playBells } from '../actions/soundActions'
import bells from '../album covers/bell.jpeg'

class Bells extends Component {
  render() {
    //console.log(this.props)
    const sounds = this.props.sounds;

    if (sounds) {
      return (<div className="board">
        <div className="album-cover">
          <div className="image">
            <img src={bells} alt="" />
          </div>
          <div className="description">
            <div>
              <span>ALBUM</span>
              <h1>BELLS</h1>
              <p>{this.props.sounds.length} songs</p>
            </div>
          </div>
        </div>
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