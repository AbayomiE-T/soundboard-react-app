import React from 'react';

const Button = ({ playSound, id, soundName }) => {


    return (
        <div className="song">
            <span>{soundName}</span>
            <div onClick={() => playSound(id)}>
                <i className='fas fa-play'></i>
            </div>
        </div>
    )
}

export default Button;
