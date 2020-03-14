const initState = {
    sounds: [
        {id: 1, soundName: 'wow', soundSource: 'https://freesound.org/apiv2/sounds/48183/download', isClicked: false, sound:null},
        {id: 2, soundName: 'hey', soundSource: 'https://freesound.org/apiv2/sounds/30989/download', isClicked: false, sound: null}
    ]
}

const rootReducer = (state=initState, action) =>{

    if (action.type === 'PLAY_SOUND'){
        
        let audio = state.sounds.find(snd =>{
            return snd.id === action.id;
          });
    
          if (audio.isClicked){
            audio.sound.pause();
            console.log("PAUSE");
          }
          
          audio.sound = new Audio(audio.soundSource);
          audio.isClicked = true;
    
          let soundArray = state.sounds;
          let index = soundArray.indexOf(audio);
    
          soundArray[index] = audio;
          
          //this.setState({sounds: soundArray});
          
          console.log(audio.soundName + " is currently playing")
          audio.sound.play();
    
          return{
              ...state,
              sounds: soundArray
          }
    }

    return state
}

export default rootReducer