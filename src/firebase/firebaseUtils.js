import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDiHdnTiWymG8K3Y-nGE5B57joiDtc8KJ4',
  authDomain: 'kyu-christian-union.firebaseapp.com',
  projectId: 'kyu-christian-union',
  storageBucket: 'kyu-christian-union.appspot.com',
  messagingSenderId: '962300365062',
  appId: '1:962300365062:web:238d3c384acd7eb85bf687',
  measurementId: 'G-QWDG48KDB6'
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
const db = firebaseApp.firestore();
export const storage = firebaseApp.storage().ref();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = db.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date().getTime();

    try {
      await userRef.set({
        fullName: displayName,
        email,
        createdAt,
        photo: photoURL,
        requiredFields: [],
        role: 'user',
        ...additionalData
      });
    } catch (error) {
      //   console.log('error creating user', error.message);
    }
  }

  // eslint-disable-next-line consistent-return
  return userRef;
};

export const getUserRef = async userAuth => {
  if (!userAuth) return;

  const userRef = db.doc(`users/${userAuth.uid}`);

  // eslint-disable-next-line consistent-return
  return userRef;
};

export default db;
