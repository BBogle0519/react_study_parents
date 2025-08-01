import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const element1 = <h2>hello, world</h2>;
  const element2 = (
    <ul>
      <li>A</li>
      <li>B</li>
      <li>C</li>
    </ul>
  );

  console.log(element1);
  console.log(element2);

  return (
    <>
      <h1>JSX</h1>
    </>
  );
}

export default App;
