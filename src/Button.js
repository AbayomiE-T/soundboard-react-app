import React, { Component } from 'react';

class Button extends Component{
  state = {
    isClicked: false,
    id: 0,
    soundFile: "SOUND"
  }

    render(){
        return (
          <div className="Button">
          <p>There is currently nothing here</p>
          </div>
        );
        }
    
}

export default Button;