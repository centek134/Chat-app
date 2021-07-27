import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCnfD1FDhO7DEjK1iTKkHBldOBo8hn6ed4",
    authDomain: "live-chat-project-cb198.firebaseapp.com",
    databaseURL: "https://live-chat-project-cb198-default-rtdb.firebaseio.com",
    projectId: "live-chat-project-cb198",
    storageBucket: "live-chat-project-cb198.appspot.com",
    messagingSenderId: "572242658599",
    appId: "1:572242658599:web:13e414928e8f3cf2aa5502",
    measurementId: "G-963QE80PVH"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;