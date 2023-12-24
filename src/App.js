import React from "react";
import Navigation from "./components/Header/Navigation";
import TopBanner from "./components/TopBanner/TopBanner";
import AllProducts from './components/AllProducts/AllProducts';
import NewProducts from "./components/NewArrivals/NewProducts";
import Exclusive from "./components/Exclusive/Exclusive";
import Tips from "./components/Tips/Tips";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
    <Navigation/>
    <TopBanner/>
    <NewProducts/>
    <AllProducts/>
    <Exclusive/>
    <Tips/>
    <Footer/>
    </div>
  );
}

export default App;
