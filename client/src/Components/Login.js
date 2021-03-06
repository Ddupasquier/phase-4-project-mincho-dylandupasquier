import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function Login({ user, onLogin, username, setUsername }) {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState();
  const [errors, setErrors] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function ifLogin(e) {
    e.preventDefault();
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => r.json())
      .then((user) => {
        if (user.error) {
          setErrors(errors);
        } else {
          onLogin(user);
        }
      });
    setIsLogin(true);
    handleClose();
  }

  function ifSignup(e) {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json();
      } else {
        res.json().then((e) => setErrors(Object.entries(e.error).flat()));
      }
    });
    setIsLogin(false);
  }

  function handleSubmit() {
    isLogin ? ifLogin() : ifSignup();
  }

  return (
    <>
      <button
        variant="primary"
        onClick={handleShow}
        className="button loginbtn"
      >
        Login/Signup
      </button>

      <Modal show={show} onHide={handleClose} className="modalCont">
        <Modal.Header closeButton>
          <h3>Login</h3>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="loginform">
            <p className="medfont">Let's Get Started By Logging In!</p>
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
            <button
              type="submit"
              className="button"
              onClick={ifLogin}
              value="login"
            >
              Login
            </button>{" "}
            {isLogin === false ? null : (
              <button
                type="submit"
                className="signupbtn button"
                onClick={ifSignup}
                value="signup"
              >
                Signup
              </button>
            )}
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
