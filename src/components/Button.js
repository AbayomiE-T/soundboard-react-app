import React, { useRef, useState } from 'react';

const Button = ({ soundName, source }) => {

    const [playing, setPlaying] = useState(false);
    const audioRef = useRef();
    const playToggle = useRef();

    const handleClick = () => {

        if (!playing) {
            audioRef.current.play();
            setPlaying(true);
            playToggle.current.classList.toggle("fa-play");
            playToggle.current.classList.toggle("fa-pause");
        }

        else {
            audioRef.current.pause();
            setPlaying(false);
            playToggle.current.classList.toggle("fa-play");
            playToggle.current.classList.toggle("fa-pause");
        }

    }

    return (
        <div className="song">
            <span>{soundName}</span>
            <div onClick={handleClick}>
                <i ref={playToggle} className='fas fa-play'></i>
            </div>
            <audio ref={audioRef} src={source} controls />
        </div>
    )
}

export default Button;
