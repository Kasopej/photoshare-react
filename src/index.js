import ReactDOM from "react-dom/client";
import MainApp from "./components/Main";
import "./assets/css/main.css";
import { BrowserRouter } from "react-router-dom";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducer";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
installFirebase();

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById("root") ?? document.body).render(
  <Provider store={store}>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </Provider>
);

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

  // Initialize Firebase
  initializeApp(firebaseConfig);
}
