import "./firebase_config";
import ReactDOM from "react-dom/client";
import MainApp from "./components/Main";
import "./assets/css/main.css";
import { BrowserRouter } from "react-router-dom";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.createRoot(document.getElementById("root") ?? document.body).render(
  <Provider store={store}>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </Provider>
);
