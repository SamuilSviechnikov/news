import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyBgvWyQgd7TikcvKP-7cyO2qRlkfsWkUeE",
  authDomain: "my-news-site-e962f.firebaseapp.com",
  databaseURL: "https://my-news-site-e962f.firebaseio.com",
  projectId: "my-news-site-e962f",
  storageBucket: "my-news-site-e962f.appspot.com",
  messagingSenderId: "519489401181",
  appId: "1:519489401181:web:b379da43544fb91e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase