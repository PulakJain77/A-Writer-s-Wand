import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBZxhJU0SrAiAl9BK-xrB6TNtX7HyxNjg",
  authDomain: "news-letter-app-79c7f.firebaseapp.com",
  databaseURL: "https://news-letter-app-79c7f-default-rtdb.firebaseio.com",
  projectId: "news-letter-app-79c7f",
  storageBucket: "news-letter-app-79c7f.appspot.com",
  messagingSenderId: "867549049689",
  appId: "1:867549049689:web:b22acf6f78f5b1c3991248",
  measurementId: "G-HCBJXJHM01"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.database();
