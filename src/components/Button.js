import React, { useRef, useState } from 'react';

const Button = ({ playSound, id, soundName, audio }) => {

    const [clicked, setClick] = useState(false);
    const iconToggle = useRef();

    const handleClick = () => {

        playSound(id);

        if (clicked) {
            iconToggle.current.classList.toggle("fa-pause");
            iconToggle.current.classList.toggle("fa-play");
            setClick(false);
        }

        if (!clicked) {
            iconToggle.current.classList.toggle("fa-play");
            iconToggle.current.classList.toggle("fa-pause");
            setClick(true);
        }
    }

    return (
        <div className="song">
            <span>{soundName}</span>
            <div onClick={handleClick}>
                <i ref={iconToggle} className='fas fa-play'></i>
            </div>
        </div>
    )
}

export default Button;
