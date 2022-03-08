import React, { useState, useEffect } from "react";
import Login from "../Login";
import { Link } from "react-router-dom";

function Nav() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function onLogout() {
    setUser(null);
  }

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  function renderLogin() {
    if (user !== null) {
      return (
        <div className="welcomeCont">
          <p className="loginmsg">Welcome, {user.username}!</p>
          <button onClick={handleLogout} className="button logoutbtn">
            Logout
          </button>
        </div>
      );
    } else {
      return <Login user={user} onLogin={setUser} />;
    }
  }

  return (
    <>
      <div className="navbar">
        <div className="navtitle">National Parks</div>
        <div className="navlink">
          <Link to="/" className="link">Parks | </Link>
          <Link to="/activities" className="link">Activities | </Link>
          <Link to="/campgrounds" className="link">Campgrounds</Link>
        </div>
        {renderLogin()}
      </div>
    </>
  );
}

export default Nav;
