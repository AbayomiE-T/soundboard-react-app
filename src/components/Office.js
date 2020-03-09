import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Office extends Component{
    state = {
        sounds: []
    }
    
    render(){
        return(<p>You are in the office page.</p>)
    }
}

export default Office