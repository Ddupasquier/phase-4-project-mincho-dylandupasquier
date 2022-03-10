import React, { useEffect } from "react";
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
  }, [setUser]);

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  function onLogout() {
    setUser(null);
  }

  function renderLogin() {
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
      return <Login user={user} onLogin={setUser} username={username} setUsername={setUsername} />;
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
          {user !== null ? <Link to={`/my_profile/${user.username}`} className="link">
            My Profile
          </Link> : <span className="disabledMyProfile">My Profile</span>}
        </div>
        {renderLogin()}
      </div>
    </>
  );
}

export default Nav;
