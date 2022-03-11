import React, { useState } from "react";
import SlideNav from "./Components/SlideNav/SlideNav";
import Main from "./Components/Main";
import MyProfile from "./Components/MyProfile";
import Campgrounds from "./Components/Campgrounds";
import SelectedPark from "./Components/SelectedPark";
import ParkCard from "./Components/ParkCard";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
// import { useParams } from "react-router-dom";
import "./index.css";

function App() {
  const [sortBy, setSortBy] = useState("name");
  const [allParks, setAllParks] = useState([]);
  const [search, setSearch] = useState("");
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const sortedParks = [...allParks].sort(compare);
  // const { name } = useParams()

  const searchParks = sortedParks.filter((park) => {
    return park.name.toLowerCase().includes(search.toLowerCase());
  });

  function compare(a, b) {
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    return 0;
  }

  const eachPark = searchParks.map((park) => {
    return <ParkCard park={park} key={park.id} />;
  });

  return (
    <div className="App">
      <header className="App-header">
        <SlideNav
          user={user}
          setUser={setUser}
          username={username}
          setUsername={setUsername}
        />
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <Main
              eachPark={eachPark}
              setAllParks={setAllParks}
              allParks={allParks}
              search={search}
              sortBy={sortBy}
              setSearch={setSearch}
              setSortBy={setSortBy}
            />
          }
        />
        <Route
          path="/my_profile/:name"
          element={
            user !== null ? (
              <MyProfile
                user={user}
                setUser={setUser}
                username={username}
                setUsername={setUsername}
              />
            ) : (
              "Please Log Back In!"
            )
          }
        />
        <Route path="/campgrounds" element={<Campgrounds />} />
        <Route path="/parks/:id" element={<SelectedPark />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
