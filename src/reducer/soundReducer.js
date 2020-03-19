const soundReducer = (state={}, action) =>{
    //console.log("YOOOO")
    if (action.type === 'PLAY_SOUND'){
        //console.log(action.data)

        let audio = action.data;

        audio.sound = new Audio(audio.soundSource);
        audio.isClicked = true;

        audio.sound.play();
    
          return{
              audio
          }
    }
    else if (action.type === 'ERR'){
        console.log("There appears to be an error")
    }
    return state
}

export default soundReducer
