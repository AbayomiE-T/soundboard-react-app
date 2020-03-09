import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class School extends Component{
    state = {
        sounds: []
    }
    
    render(){
        return(<p>You are in the school page.</p>)
    }
}

export default School