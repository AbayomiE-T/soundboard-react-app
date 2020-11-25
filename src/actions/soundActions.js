export const playAnimals = (id) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        //async call to database

        const firestore = getFirestore();
        const doc = firestore.collection('animals').doc(id);
        //console.log(getState())
        doc.get().then((doc) => {
            if (doc.exists) {
                //console.log(doc.data());
                dispatch({ type: 'PLAY_SOUND', data: doc.data() });
            }
            else {
                console.log("No such document!");
            }
            //dispatch({type: 'PLAY_SOUND', id});
        }).catch(err => {
            dispatch({ type: 'ERR', err });
        })

    }
}

export const playBells = (id) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        //async call to database

        const firestore = getFirestore();
        const doc = firestore.collection('bells').doc(id);
        //console.log(getState())
        doc.get().then((doc) => {
            if (doc.exists) {
                //console.log(doc.data());
                dispatch({ type: 'PLAY_SOUND', data: doc.data() });
            }
            else {
                console.log("No such document!");
            }
            //dispatch({type: 'PLAY_SOUND', id});
        }).catch(err => {
            dispatch({ type: 'ERR', err });
        })

    }
}

export const playBodilySounds = (id) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        //async call to database

        const firestore = getFirestore();
        const doc = firestore.collection('bodilySounds').doc(id);
        //console.log(getState())
        doc.get().then((doc) => {
            if (doc.exists) {
                //console.log(doc.data());
                dispatch({ type: 'PLAY_SOUND', data: doc.data() });
            }
            else {
                console.log("No such document!");
            }
            //dispatch({type: 'PLAY_SOUND', id});
        }).catch(err => {
            dispatch({ type: 'ERR', err });
        })
    }
}

export const playClocks = (id) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        //async call to database

        const firestore = getFirestore();
        const doc = firestore.collection('clocks').doc(id);
        //console.log(getState())
        doc.get().then((doc) => {
            if (doc.exists) {
                //console.log(doc.data());
                dispatch({ type: 'PLAY_SOUND', data: doc.data() });
            }
            else {
                console.log("No such document!");
            }
            //dispatch({type: 'PLAY_SOUND', id});
        }).catch(err => {
            dispatch({ type: 'ERR', err });
        })

    }
}

export const playConstruction = (id) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        //async call to database

        const firestore = getFirestore();
        const doc = firestore.collection('construction').doc(id);
        //console.log(getState())
        doc.get().then((doc) => {
            if (doc.exists) {
                //console.log(doc.data());
                dispatch({ type: 'PLAY_SOUND', data: doc.data() });
            }
            else {
                console.log("No such document!");
            }
            //dispatch({type: 'PLAY_SOUND', id});
        }).catch(err => {
            dispatch({ type: 'ERR', err });
        })

    }
}

export const playKitchen = (id) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        //async call to database

        const firestore = getFirestore();
        const doc = firestore.collection('kitchen').doc(id);
        //console.log(getState())
        doc.get().then((doc) => {
            if (doc.exists) {
                //console.log(doc.data());
                dispatch({ type: 'PLAY_SOUND', data: doc.data() });
            }
            else {
                console.log("No such document!");
            }
            //dispatch({type: 'PLAY_SOUND', id});
        }).catch(err => {
            dispatch({ type: 'ERR', err });
        })

    }
}

export const playMusic = (id) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        //async call to database

        const firestore = getFirestore();
        const doc = firestore.collection('musicInstruments').doc(id);
        //console.log(getState())
        doc.get().then((doc) => {
            if (doc.exists) {
                //console.log(doc.data());
                dispatch({ type: 'PLAY_SOUND', data: doc.data() });
            }
            else {
                console.log("No such document!");
            }
            //dispatch({type: 'PLAY_SOUND', id});
        }).catch(err => {
            dispatch({ type: 'ERR', err });
        })

    }
}

export const playOffice = (id) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        //async call to database

        const firestore = getFirestore();
        const doc = firestore.collection('office').doc(id);
        //console.log(getState())
        doc.get().then((doc) => {
            if (doc.exists) {
                //console.log(doc.data());
                dispatch({ type: 'PLAY_SOUND', data: doc.data() });
            }
            else {
                console.log("No such document!");
            }
            //dispatch({type: 'PLAY_SOUND', id});
        }).catch(err => {
            dispatch({ type: 'ERR', err });
        })

    }
}

export const playScifi = (id) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        //async call to database

        const firestore = getFirestore();
        const doc = firestore.collection('scifi').doc(id);
        //console.log(getState())
        doc.get().then((doc) => {
            if (doc.exists) {
                //console.log(doc.data());
                dispatch({ type: 'PLAY_SOUND', data: doc.data() });
            }
            else {
                console.log("No such document!");
            }
            //dispatch({type: 'PLAY_SOUND', id});
        }).catch(err => {
            dispatch({ type: 'ERR', err });
        })

    }
}

export const playTraffic = (id) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        //async call to database

        const firestore = getFirestore();
        const doc = firestore.collection('traffic').doc(id);
        //console.log(getState())
        doc.get().then((doc) => {
            if (doc.exists) {
                //console.log(doc.data());
                dispatch({ type: 'PLAY_SOUND', data: doc.data() });
            }
            else {
                console.log("No such document!");
            }
            //dispatch({type: 'PLAY_SOUND', id});
        }).catch(err => {
            dispatch({ type: 'ERR', err });
        })

    }
}

export const playWar = (id) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        //async call to database

        const firestore = getFirestore();
        const doc = firestore.collection('war').doc(id);
        //console.log(getState())
        doc.get().then((doc) => {
            if (doc.exists) {
                //console.log(doc.data());
                dispatch({ type: 'PLAY_SOUND', data: doc.data() });
            }
            else {
                console.log("No such document!");
            }
            //dispatch({type: 'PLAY_SOUND', id});
        }).catch(err => {
            dispatch({ type: 'ERR', err });
        })

    }
}

