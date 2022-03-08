import React from "react";
import SlideNav from "./Components/SlideNav/SlideNav";
import Main from "./Components/Main";
import MyProfile from "./Components/MyProfile";
import Campgrounds from "./Components/Campgrounds";
import SelectedPark from "./Components/SelectedPark";
// import Signup from "./Components/Signup";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import "./index.css";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <SlideNav />
      </header>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/activities" element={<MyProfile />} />
        <Route path="/campgrounds" element={<Campgrounds />} />
        <Route path="/park/:id" element={<SelectedPark />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
