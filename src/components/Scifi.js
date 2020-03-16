import React, { Component } from 'react';
import Board from './Board';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { playScifi } from '../actions/playScifi'

class Scifi extends Component{
    

    render(){
      //console.log(this.props)
      const sounds = this.props.sounds;

      if (sounds){
        return(<Board sounds={this.props.sounds} playSound={this.props.playScifi}/>)
      }

      else{
        return(
          <div className="container center">
          <p>Loading project...</p>
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
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
      { collection: 'scifi' }
    ])
  )(Scifi)
  
  //export default connect(mapStateToProps, mapDispatchToProps)(StarWars)