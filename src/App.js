import "./App.css";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "./components/MyNabar";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <h1>Tech4U Dashboard</h1>
        <MyFooter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
