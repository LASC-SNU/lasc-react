import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey : '',
  authDomain : '',
  databseURL : '',
  storageBucket : ''
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;
