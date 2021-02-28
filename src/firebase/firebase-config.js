import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBFKouFMuODQVjlTniFU9oBXFxgkj3OC6o",
    authDomain: "react-curso-25e60.firebaseapp.com",
    projectId: "react-curso-25e60",
    storageBucket: "react-curso-25e60.appspot.com",
    messagingSenderId: "939417983640",
    appId: "1:939417983640:web:cb69e03288d79866978eed"
  };

// const firebaseConfigTesting = {
//     apiKey: "AIzaSyD5-4gUUrMLCzTWDEJ3QpkmfIboN5PDCq4",
//     authDomain: "push-one-signal-17ede.firebaseapp.com",
//     databaseURL: "https://push-one-signal-17ede.firebaseio.com",
//     projectId: "push-one-signal-17ede",
//     storageBucket: "push-one-signal-17ede.appspot.com",
//     messagingSenderId: "803724161810",
//     appId: "1:803724161810:web:02f32ebc98a71e376339cb"
//   };


// if( process.env.NODE_ENV === 'test' ) {
//     // testing
//     firebase.initializeApp(firebaseConfigTesting);
// } else {
// dev/prod
// firebase.initializeApp(firebaseConfig);
// }
    
firebase.initializeApp(firebaseConfig);



const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}