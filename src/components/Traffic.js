import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Traffic extends Component{
    state = {
        sounds: []
    }
    
    render(){
        return(<p>You are in the traffic page.</p>)
    }
}

export default Traffic