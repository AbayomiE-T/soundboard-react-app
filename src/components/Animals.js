import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Animals extends Component{
    state = {
        sounds: []
    }
    
    render(){
        return(<p>You are in the Animals page.</p>)
    }
}

export default Animals