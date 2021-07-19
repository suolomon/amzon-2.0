import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDa3RIojGE60bWzcu6zxqibaOTIJFAv1Yo",
  authDomain: "amzn-2-70652.firebaseapp.com",
  projectId: "amzn-2-70652",
  storageBucket: "amzn-2-70652.appspot.com",
  messagingSenderId: "142369168994",
  appId: "1:142369168994:web:d5c1ee9d06e8ccba7f7b3b",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
