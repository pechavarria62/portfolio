import firebase from 'react-native-firebase';

const firebaseConfig = {
  // Add your Firebase project configuration here
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
