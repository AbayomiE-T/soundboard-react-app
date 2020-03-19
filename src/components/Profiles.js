import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Profiles = () =>{
    return (
        <div className= "profile-routes">
            <p>Select a sound profile:</p>
            <ul className="profiles">
                <li><Link to= "/animals">Animals</Link></li>
                <li><Link to= "/bells">Bells</Link></li>
                <li><Link to= "/bodily-sounds">Bodily sounds</Link></li>
                <li><Link to= "/clocks">Clocks</Link></li>
                <li><Link to= "/construction">Construction</Link></li>
                <li><Link to= "/kitchen">Kitchen</Link></li>
                <li><Link to= "/music-instruments">Music instruments</Link></li>
                <li><Link to= "/office">Office</Link></li>
                <li><Link to= "/scifi">Scifi</Link></li>
                <li><Link to= "/war">War</Link></li>
            </ul>
        </div>

    )
}

export default withRouter(Profiles)