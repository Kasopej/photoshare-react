import ReactDOM from "react-dom/client";
import Organizer from "./components/Organizer";
import Title from "./components/Title";

const App = (
  <div>
    <Title></Title>
    <Organizer></Organizer>
  </div>
);

ReactDOM.createRoot(document.getElementById("root") ?? document.body).render(
  App
);
