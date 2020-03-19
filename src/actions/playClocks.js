export const playClocks = (id) =>{
    return(dispatch, getState, { getFirestore, getFirebase }) => {
        //async call to database

        const firestore = getFirestore();
        const doc = firestore.collection('clocks').doc(id);
        //console.log(getState())
        doc.get().then((doc)=>{
            if (doc.exists){
                //console.log(doc.data());
                dispatch({type: 'PLAY_SOUND', data: doc.data()});
            }
            else{
                console.log("No such document!");
            }
            //dispatch({type: 'PLAY_SOUND', id});
        }).catch(err => {
            dispatch({type: 'ERR', err});
        })
        
    }
}