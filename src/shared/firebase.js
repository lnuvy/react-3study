// compat 붙이니 에러가 안남
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/compat/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyBFxvmU5Xj6-kT_ioIwZMapmwYrvWqDzDw",
//   authDomain: "react-3-image.firebaseapp.com",
//   projectId: "react-3-image",
//   storageBucket: "react-3-image.appspot.com",
//   messagingSenderId: "814210445574",
//   appId: "1:814210445574:web:766a80c573badd22952e87",
// };
const firebaseConfig = {
  apiKey: "AIzaSyCDomJqkx9mqobag58inyrsFBYtgQ1ZK6M",
  authDomain: "react-image-47b10.firebaseapp.com",
  projectId: "react-image-47b10",
  storageBucket: "react-image-47b10.appspot.com",
  messagingSenderId: "640380843656",
  appId: "1:640380843656:web:25ad174642044ceabfd13d",
  measurementId: "G-8PB2ZYP27J",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
// getFirestore(firestore)
const storage = getStorage();
const realtime = firebase.database();

export { auth, apiKey, firestore, storage, realtime };
