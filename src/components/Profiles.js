import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Profiles = () =>{
    return (
        <div className= "profile-routes">
            <h1>Profiles</h1>
            <nav>
                <ul className="profiles">
                    <li><Link className= "black-text" to= "/animals">Animals</Link></li>
                    <li><Link className= "black-text" to= "/bells">Bells</Link></li>
                    <li><Link className= "black-text" to= "/bodily-sounds">Bodily sounds</Link></li>
                    <li><Link className= "black-text" to= "/clocks">Clocks</Link></li>
                    <li><Link className= "black-text" to= "/construction">Construction</Link></li>
                    <li><Link className= "black-text" to= "/kitchen">Kitchen</Link></li>
                    <li><Link className= "black-text" to= "/music-instruments">Music instruments</Link></li>
                    <li><Link className= "black-text" to= "/office">Office</Link></li>
                    <li><Link className= "black-text" to= "/scifi">Scifi</Link></li>
                    <li><Link className= "black-text" to= "/war">War</Link></li>
                </ul>
            </nav>
        </div>

    )
}

export default withRouter(Profiles)