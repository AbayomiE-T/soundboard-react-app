const soundReducer = (state = {}, action) => {

    if (action.type === 'PLAY_SOUND') {

        let audio = action.data;

        audio.sound = new Audio(audio.soundSource);
        audio.isClicked = true;

        audio.sound.play();

        return {
            audio
        }
    }
    else if (action.type === 'ERR') {
        console.log("There appears to be an error")
    }
    return state
}

export default soundReducer
