import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Comedy extends Component{
    state = {
        sounds: []
    }
    
    render(){
        return(<p>You are in the comedy page.</p>)
    }
}

export default Comedy