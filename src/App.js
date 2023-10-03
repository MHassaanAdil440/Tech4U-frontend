import "./App.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./test_components/MyNabar";
import MyFooter from "./test_components/MyFooter";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        
      <Navbar/>
      <Signup/>
      <MyFooter />
      </BrowserRouter>
      {/* <Login /> */}
      {/* <BrowserRouter>
        <Navbar />
      </BrowserRouter> */}
    </div>
  );
}

export default App;
