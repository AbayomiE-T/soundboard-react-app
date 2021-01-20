import React, { Component } from 'react';
import Board from './Board';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { playScifi } from '../actions/soundActions'
import scifi from '../album covers/sci-fi.jpg'

class Scifi extends Component {


  render() {
    //console.log(this.props)
    const sounds = this.props.sounds;

    if (sounds) {
      return (<div className="board">
        <div className="album-cover">
          <div className="image">
            <img src={scifi} alt="" />
          </div>
          <div className="description">
            <div>
              <span>ALBUM</span>
              <h1>SCI-FI</h1>
              <p>{this.props.sounds.length} songs</p>
            </div>
          </div>
        </div>
        <Board sounds={this.props.sounds} playSound={this.props.playScifi} profileName="Scifi" />
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
    sounds: state.firestore.ordered.scifi || null

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playScifi: (id) => dispatch(playScifi(id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'scifi' }
  ])
)(Scifi)

  //export default connect(mapStateToProps, mapDispatchToProps)(StarWars)