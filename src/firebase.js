import firebase from "firebase";


 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyBFx9_IeqZECgB7MegHkA8BZ_Y1m63dI00",
  authDomain: "bt3103-week-6-e00ec.firebaseapp.com",
  projectId: "bt3103-week-6-e00ec",
  storageBucket: "bt3103-week-6-e00ec.appspot.com",
  messagingSenderId: "200056600569",
  appId: "1:200056600569:web:947f9aff08490e5d8e6f28",
  measurementId: "G-WZPRY0DS4Y"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;
  
