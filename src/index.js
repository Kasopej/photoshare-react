import React from "react";
import ReactDOM from "react-dom/client";

const mainHeading = React.createElement(
  "ol",
  null,
  Array(1, 2, 3).map((index) =>
    React.createElement("li", { key: index }, `Item ${index}`)
  )
);

ReactDOM.createRoot(document.getElementById("root") ?? document.body).render(
  mainHeading
);
