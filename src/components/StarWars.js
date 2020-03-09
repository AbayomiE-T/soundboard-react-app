import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class StarWars extends Component{
    state = {
        sounds: []
    }
    
    render(){
        return(<p>You are in the star wars page.</p>)
    }
}

export default StarWars