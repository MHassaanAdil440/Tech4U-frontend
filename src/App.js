import "./App.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./test_components/MyNabar";
import MyFooter from "./test_components/MyFooter";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Drawer from "./components/Drawer";
import CategorySection from "./components/CategorySection"
import Slider from "./components/Slider";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        
      <Navbar/>
      {/* <Signup/> */}
      {/* <Drawer/> */}
      <CategorySection/>
      <Slider/>
      {/* <Login /> */}
      <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
