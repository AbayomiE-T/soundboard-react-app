import React, { Component } from 'react';
import Board from './Board';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { playClocks } from '../actions/soundActions'
import clocks from '../album covers/clocks.jpg'

class Clocks extends Component {
  render() {
    //console.log(this.props)
    const sounds = this.props.sounds;

    if (sounds) {
      return (<div className="board">
        <div className="album-cover">
          <div className="image">
            <img src={clocks} alt="" />
          </div>
          <div className="description">
            <div>
              <span>ALBUM</span>
              <h1>CLOCKS</h1>
              <p>{this.props.sounds.length} songs</p>
            </div>
          </div>
        </div>
        <Board sounds={this.props.sounds} playSound={this.props.playClocks} profileName="Clocks" />
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
    sounds: state.firestore.ordered.clocks || null

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playClocks: (id) => dispatch(playClocks(id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'clocks' }
  ])
)(Clocks)

//export default Clocks