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
import Cards from "./components/Cards";
function App() {
  const img1="https://cdn.pixabay.com/photo/2016/03/27/19/43/samsung-1283938_1280.jpg"
  const img2="https://cdn.pixabay.com/photo/2018/01/08/02/34/technology-3068617_1280.jpg"
  const img3="https://cdn.pixabay.com/photo/2016/06/28/05/10/laptop-1483974_1280.jpg"
  return (
    <div className="">
      <BrowserRouter>
        
      <Navbar/>
      <Cards title1="Andriod" img1={img1} title2="Iphone X" img2={img2} title3="Laptop" img3={img3}  />
      {/* <Signup/> */}
      {/* <Drawer/> */}
      {/* <CategorySection/>
      <Slider/> */}
      {/* <Login /> */}
      {/* <MyFooter /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
