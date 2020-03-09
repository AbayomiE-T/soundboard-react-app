import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Disaster extends Component{
    state = {
        sounds: []
    }
    
    render(){
        return(<p>You are in the disaster page.</p>)
    }
}

export default Disaster