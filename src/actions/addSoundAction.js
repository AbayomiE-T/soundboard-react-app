export const addSoundAction = (sound, collectionName) => {
    return (dispatch, getState, {getFirestore}) => {
      const firestore = getFirestore();

      firestore.collection(collectionName).add({
        ...sound,
        soundName: sound.soundName,
        soundSource: sound.soundSource,
        isClicked: sound.isClicked,
        sound: null
      }).then(() => {
        dispatch({ type: 'CREATE_SOUND_SUCCESS'});
        console.log("success");
      }).catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
      });
    }
  }