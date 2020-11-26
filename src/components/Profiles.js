import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Profiles = () => {
    return (
        <div className="profile-routes">
            <h1>Pick a sound profile from below and enjoy some sweet tunes.</h1>
            <nav>
                <ul className="profiles">
                    <li className="profile-link"><Link to="/animals">Animals</Link></li>
                    <li className="profile-link"><Link to="/bells">Bells</Link></li>
                    <li className="profile-link"><Link to="/bodily-sounds">Bodily sounds</Link></li>
                    <li className="profile-link"><Link to="/clocks">Clocks</Link></li>
                    <li className="profile-link"><Link to="/construction">Construction</Link></li>
                    <li className="profile-link"><Link to="/kitchen">Kitchen</Link></li>
                    <li className="profile-link"><Link to="/music-instruments">Music Instruments</Link></li>
                    <li className="profile-link"><Link to="/office">Office</Link></li>
                    <li className="profile-link"><Link to="/scifi">Scifi</Link></li>
                    <li className="profile-link"><Link to="/war">War</Link></li>
                </ul>
            </nav>
        </div>

    )
}

export default withRouter(Profiles)