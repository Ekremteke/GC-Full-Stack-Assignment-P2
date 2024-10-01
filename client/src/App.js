import "./App.css";
import React from "react";
import { Header, Forms, VideoCards } from "./components";

function App() {
  return (
    <html lang="en">
      <head>Suggest Stream</head>
      <Forms />
      <Header />
      <body>
        <VideoCards />
      </body>
    </html>
  );
}

export default App;
