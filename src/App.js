import logo from "./logo.svg";
import "./App.css";
import Nabar from "./components/MyNabar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nabar />
        <h1>Tech4U Dashboard</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
