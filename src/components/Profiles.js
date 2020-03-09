import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Profiles = () =>{
    return (
        <div className= "profile-routes">
            <p>Select a sound profile:</p>
            <ul className="profiles">
                <li><Link to= "/star-wars">Star Wars</Link></li>
                <li><Link to= "/memes">Memes</Link></li>
                <li><Link to= "/comedy">Comedy</Link></li>
                <li><Link to= "/animals">Animals</Link></li>
                <li><Link to= "/school">School</Link></li>
                <li><Link to= "/construction">Construction</Link></li>
                <li><Link to= "/office">Office</Link></li>
                <li><Link to= "/videogames">Videogames</Link></li>
                <li><Link to= "/traffic">Traffic</Link></li>
                <li><Link to= "/disaster">Disaster</Link></li>
            </ul>
        </div>

    )
}

export default withRouter(Profiles)