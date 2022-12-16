// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  collection,
  onSnapshot,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb3QW8-3_uAhnrUpO3nKZ6FNJvnJbrsiQ",
  authDomain: "fb-login-57304.firebaseapp.com",
  projectId: "fb-login-57304",
  storageBucket: "fb-login-57304.appspot.com",
  messagingSenderId: "24821180371",
  appId: "1:24821180371:web:8e5a2fcc4dc13807cd3126",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
function addUserToDb(name, email, uid) {
  return setDoc(doc(db, "users", uid), { email, name });
}
function postcompanyToDb(companyName, since, timing) {
  return addDoc(collection(db, "companys"), {
    companyName,
    timing,
    since,
  });
}
export { postcompanyToDb, addUserToDb };
