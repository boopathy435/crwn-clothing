import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDRA2u2-ntX5UfJMgWF4DueTHu_tO5jLrU",
  authDomain: "crwn-db-e3ce1.firebaseapp.com",
  projectId: "crwn-db-e3ce1",
  storageBucket: "crwn-db-e3ce1.appspot.com",
  messagingSenderId: "42914336717",
  appId: "1:42914336717:web:1a3acbc3f60e869f7ffe84",
  measurementId: "G-QTCLRC20P8",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
