import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Profiles = () => {
    return (
        <>
            <h1>Soundboard</h1>
            <p>Please select a sound profile from below</p>

            <nav>
                <div className="links">
                    <Link to="/animals" className="profile-link">
                        <i className='size fas fa-cat'></i>
                    </Link>
                    <Link to="/bells" className="profile-link">
                        <i className='size fas fa-bell'></i>
                    </Link>
                    <Link to="/bodily-sounds" className="profile-link">
                        <i className='size fas fa-user-alt'></i>
                    </Link>
                    <Link to="/clocks" className="profile-link">
                        <i className='size fas fa-clock'></i>
                    </Link>
                    <Link to="/construction" className="profile-link">
                        <i className='size fas fa-hammer'></i>
                    </Link>
                    <Link to="/kitchen" className="profile-link">
                        <i className='size fas fa-blender'></i>
                    </Link>
                    <Link to="/music-instruments" className="profile-link">
                        <i className='size fas fa-guitar'></i>
                    </Link>
                    <Link to="/office" className="profile-link">
                        <i className='size fas fa-building'></i>
                    </Link>
                    <Link to="/scifi" className="profile-link">
                        <i className='size fas fa-atom'></i>
                    </Link>
                    <Link to="/war" className="profile-link">
                        <i className='size fas fa-skull-crossbones'></i>
                    </Link>
                </div>
            </nav>
        </>

    )
}

export default withRouter(Profiles)