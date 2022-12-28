import React from "react";
import ReactDOM from "react-dom/client";
import MainHeading from "./components/Main";
import Title from "./components/Title";

const App = (
  <div>
    <Title></Title>
    <MainHeading></MainHeading>
  </div>
);

ReactDOM.createRoot(document.getElementById("root") ?? document.body).render(
  App
);
