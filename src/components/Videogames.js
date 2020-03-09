import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Videogames extends Component{
    state = {
        sounds: []
    }
    
    render(){
        return(<p>You are in the video games page.</p>)
    }
}

export default Videogames