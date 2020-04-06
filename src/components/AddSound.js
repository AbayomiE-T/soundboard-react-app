import React, { Component } from 'react'
//import { connect } from 'react-redux'
//import { Redirect } from 'react-router-dom'

class AddSound extends Component {
  state = {
    soundName: '',
    soundSource: '',
    isClicked: false,
    sound: null,
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })

    //console.log(e.target.files[0]);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createSound(this.state, this.props.collectionName);
    //this.props.history.push('/');
  }
  render() {

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Add a new sound</h5>
          <div className="input-field">
            <input type="text" id='soundName' onChange={this.handleChange} />
            <label htmlFor="soundName">Sound name</label>
          </div>
          <div className="input-field">
            <input type='text' id="soundSource" onChange={this.handleChange} />
            <label htmlFor="soundSource">Sound Source</label>
          </div>
          <div className="input-field">
            <input type='file' name="inpFile" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Add sound</button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddSound;