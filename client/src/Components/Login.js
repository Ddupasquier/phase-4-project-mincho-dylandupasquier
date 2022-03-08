import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function Login({ onLogin, setErrors }) {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState();

  function ifLogin(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => r.json())
      .then((user) => onLogin(user));
    setIsLogin(true);
    // console.log("logged in")
  }

  function ifSignup(e) {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json()
      } else {
        res.json().then((e) => setErrors(Object.entries(e.error).flat()));
      }
    });
    setIsLogin(false)
    // console.log("signed up")
  }

  function handleSubmit() {
    isLogin ? ifLogin() : ifSignup()
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        variant="primary"
        onClick={handleShow}
        className="button loginbtn"
      >
        Login
      </button>

      <Modal show={show} onHide={handleClose} className="modalCont">
        <Modal.Header closeButton>
          <h3>Login</h3>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="loginform">
            <p className="medfont">Let's Get Started By Logging In!</p>
            <p>One day, this may even be password protecte</p>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <br />
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <br />
            <button type="submit" className="button" onClick={ifLogin} value="login">
              Login
            </button>{" "}
            <button type="submit" className="signupbtn button" onClick={ifSignup} value="signup">
              Signup
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
