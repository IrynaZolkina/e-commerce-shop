import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBob6GeQ0HR5RcAKbNqfZt56jkJnvLURZs",
  authDomain: "e-commerce-shop-2661d.firebaseapp.com",
  databaseURL: "https://e-commerce-shop-2661d.firebaseio.com",
  projectId: "e-commerce-shop-2661d",
  storageBucket: "e-commerce-shop-2661d.appspot.com",
  messagingSenderId: "1059108345633",
  appId: "1:1059108345633:web:c9d10e3c3fff40d14e9060",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  console.log(snapShot, "---snapshot");
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    console.log("hello");

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error Creating User", error.message);
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
