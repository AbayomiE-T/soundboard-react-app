import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    
    apiKey: "XXXXXxxxxxxxxXXX",
    authDomain: "soundboard-react-app.firebaseapp.com",
    databaseURL: "https://soundboard-react-app.firebaseio.com",
    projectId: "soundboard-react-app",
    storageBucket: "soundboard-react-app.appspot.com",
    messagingSenderId: "800413073343",
    appId: "1:800413073343:web:1b179bee1578f1b4f5ab0a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;