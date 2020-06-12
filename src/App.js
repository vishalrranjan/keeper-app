import React from "react";
import Page from "./component/Page";
import Login from "./component/Login";
import "./styles.css";

let isLogedIn = true;

export default function App() {
  return <div className="App">{isLogedIn ? <Page /> : <Login />}</div>;
}
