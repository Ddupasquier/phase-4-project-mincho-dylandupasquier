import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";

function Login({ onLogin }) {
    const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
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
          <form  onSubmit={handleSubmit} className="loginform">
            <p className="medfont">Let's Get Started By Logging In!</p>
            <p>One day, this may even be password protected ;)</p>
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
            <button type="submit" className="button">
              Login
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;