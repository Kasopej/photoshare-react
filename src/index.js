import ReactDOM from "react-dom/client";
import MainApp from "./components/Main";
import "./assets/css/main.css";
import { BrowserRouter } from "react-router-dom";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducer";

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById("root") ?? document.body).render(
  <Provider store={store}>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </Provider>
);
