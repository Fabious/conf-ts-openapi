import reactLogo from "./assets/react.svg";
import apiplatformLogo from "./assets/apiplatform.svg";
import viteLogo from "/vite.svg";
import { BooksWithoutTyping } from "./BooksWithoutTyping";
import { BooksWithTyping } from "./BooksWithTyping";
import { BooksCustomHook } from "./BooksCustomHook";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="intro">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://demo.api-platform.com/docs" target="_blank">
          <img src={apiplatformLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Vite + React + Api Platform</h1>
        <h2>How to consume your api platform</h2>
      </div>

      <hr />
      <BooksWithoutTyping />
      <hr />
      <BooksWithTyping />
      <hr />
      <BooksCustomHook />
      <hr />
    </div>
  );
}

export default App;
