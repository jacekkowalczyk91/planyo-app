import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAhBIThrAf_xiDGP9hRCGKkUvavzSz0HZg",
    authDomain: "trio-app.firebaseapp.com",
    databaseURL: "https://trio-app.firebaseio.com",
    projectId: "trio-app",
    storageBucket: "trio-app.appspot.com",
    messagingSenderId: "621203733139"
};
firebase.initializeApp(config);

export const database = firebase.database
export const auth = firebase.auth

// firebase.database().ref('/').on('value', snapshot => {
//   console.log(snapshot.val())
// })

// firebase.auth().onAuthStateChanged(
//   user => {
//     if (user === null) {
//       console.log('user logged out')
//     } else {
//       console.log('user logged in')
//     }
//   }
// )

// firebase.auth().createUserWithEmailAndPassword(
//   'bartosz.cytrowski@gmail.com',
//   'test123'
// )

// firebase.auth().signInWithEmailAndPassword(
//   'bartosz.cytrowski@gmail.com',
//   'test123'
// )
  //.then(
//   user => {
//     console.log('sign in success')
//     firebase.auth().signOut().then(
//       () => console.log('sign out success')
//     )
//   }
// )


