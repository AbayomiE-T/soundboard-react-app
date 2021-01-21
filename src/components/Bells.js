import React, { Component } from 'react';
import Board from './Board';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
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
    sounds: state.firestore.ordered.bells || null

  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'bells' }
  ])
)(Bells)

//export default Bells