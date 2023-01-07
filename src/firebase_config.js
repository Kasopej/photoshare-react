// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
export {
  ref,
  child,
  set,
  update,
  onValue,
  remove,
  push,
} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const database = getDatabase(installFirebase());

function installFirebase() {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBLWYqTkcY0wJ6DX44N8cM2KcI7xENILnY",
    authDomain: "photoshare-5e927.firebaseapp.com",
    projectId: "photoshare-5e927",
    storageBucket: "photoshare-5e927.appspot.com",
    messagingSenderId: "1066131141429",
    appId: "1:1066131141429:web:49130d1264be292a06527c",
    measurementId: "G-Q650DL27LP",
  };

  // Initialize Firebase app
  return initializeApp(firebaseConfig);
}

export { database };
