import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Profiles = () => {
    return (
        <>
            <h1>Soundboard</h1>
            <p>Please select a sound profile from below</p>

            <nav>
                {/* <ul className="profiles">
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
                </ul> */}

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