import React, { useEffect } from "react";
import Login from "../Login";
import { Link } from "react-router-dom";

function Nav({ user, setUser, username, setUsername }) {
  useEffect(() => {
    fetch("/api/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, [setUser]);

  function handleLogout() {
    fetch("/api/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  function onLogout() {
    setUser(null);
  }

  function renderLogin() {
    // console.log(user);
    if (user !== null) {
      return (
        <>
          <p className="loginmsg">Welcome, {user.username}!</p>
          <button onClick={handleLogout} className="button logoutbtn">
            Logout
          </button>
        </>
      );
    } else {
      return (
        <Login
          user={user}
          onLogin={setUser}
          username={username}
          setUsername={setUsername}
        />
      );
    }
  }

  return (
    <>
      <div className="navbar">
        <div className="navtitle">National Parks</div>
        <div className="navlink">
          <Link to="/" className="link">
            Parks
          </Link>
          {" | "}
          {user !== null ? (
            <Link to={`/my_profile/${user.username}`} className="link">
              My Profile
            </Link>
          ) : (
            <span className="disabledMyProfile">My Profile</span>
          )}
        </div>
        {renderLogin()}
      </div>
    </>
  );
}

export default Nav;
