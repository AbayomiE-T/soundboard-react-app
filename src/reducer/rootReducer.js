import soundReducer from './soundReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    sound: soundReducer,
    firestore: firestoreReducer
  });

export default rootReducer