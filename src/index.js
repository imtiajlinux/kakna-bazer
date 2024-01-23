import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Userinfoprovider } from "./components/context/getUserInfocontext";
import { Authprovider } from "./components/context/currentuserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Userinfoprovider>
      <Authprovider>
        <App />
      </Authprovider>
    </Userinfoprovider>
  </React.StrictMode>
);
