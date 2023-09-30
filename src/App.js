import "./App.css";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "./test_components/MyNabar";
import MyFooter from "./test_components/MyFooter";
import Signup from "./components/Signup"
import Login from "./components/Login";

function App() {
  return (
    <div className="">
      <Signup/>
      {/* <Login /> */}
    </div>
  );
}

export default App;
