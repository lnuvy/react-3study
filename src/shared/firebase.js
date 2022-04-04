// compat 붙이니 에러가 안남
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFxvmU5Xj6-kT_ioIwZMapmwYrvWqDzDw",
  authDomain: "react-3-image.firebaseapp.com",
  projectId: "react-3-image",
  storageBucket: "react-3-image.appspot.com",
  messagingSenderId: "814210445574",
  appId: "1:814210445574:web:766a80c573badd22952e87",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = getStorage();

export { auth, apiKey, firestore, storage };
