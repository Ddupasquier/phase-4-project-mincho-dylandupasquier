import SlideNav from "./Components/SlideNav/SlideNav";
import Main from "./Components/Main";
import Activities from "./Components/Activities";
import Campgrounds from "./Components/Campgrounds";
import SelectedPark from "./Components/SelectedPark";
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
        <Route path="/activities" element={<Activities />} />
        <Route path="/campgrounds" element={<Campgrounds />} />
        <Route path="/park/:id" element={<SelectedPark />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
