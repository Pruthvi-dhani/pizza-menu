// entry point for webpack
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React!!!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// during development react will render twice in order to find potential bugs
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
