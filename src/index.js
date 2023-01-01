import ReactDOM from "react-dom/client";
import MainApp from "./components/Main";
import "./assets/css/main.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") ?? document.body).render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
);
