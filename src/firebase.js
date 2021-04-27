import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBud73ihEe2pYj9RPmI8WPVyJklLEL6RiA",
    authDomain: "disney-clone-4a2ef.firebaseapp.com",
    projectId: "disney-clone-4a2ef",
    storageBucket: "disney-clone-4a2ef.appspot.com",
    messagingSenderId: "194570990141",
    appId: "1:194570990141:web:f677e639dd036eb6def054"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const store = firebase.storage()

export { auth, provider, store }
export default db