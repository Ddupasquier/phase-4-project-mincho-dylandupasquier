import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
// import { useParams } from "react-router-dom";
// bring in user, apply to state defaults
function MyProfile({ user, setUser, username, setUsername }) {
  const [show, setShow] = useState(false);
  const [image, setImg] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSubmit(e) {
    // e.preventDefault();
    fetch(`/api/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, city, state, image, email, phone }),
    }).then((res) => res.json());
    // .then((updatedUser) => {

    // });
  }

  return (
    <>
      {/* Return User Info */}
      <div className="myProfile">
        <div className="userImage">
          <img src={user.image} alt={user.username} />
        </div>
        Username: {user.username}
        <br />
        City: {user.city}
        <br />
        State: {user.state}
        <br />
        Phone: {user.phone}
        <br />
        Email: {user.email}
        <br />
        <button variant="primary" onClick={handleShow} className="button">
          Edit
        </button>
      </div>
      {/*  */}

      <Modal show={show} onHide={handleClose} className="">
        <Modal.Header closeButton>
          <h3>Edit Profile</h3>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="userpatchform">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => {if (e.target.value !== "") setUsername(e.target.value)}}
            ></input>
            <br />
            <input
              type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) => {if (e.target.value !== "") setImg(e.target.value)}}
            ></input>
            <br />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => {if (e.target.value !== "") setCity(e.target.value)}}
            ></input>
            <br />
            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => {if (e.target.value !== "")setState(e.target.value)}}
            ></input>
            <br />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => {if (e.target.value !== "")setEmail(e.target.value)}}
            ></input>
            <br />
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => {if (e.target.value !== "")setPhone(e.target.value)}}
            ></input>
            <br />
            <button type="submit" className="button">
              All Done!
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyProfile;
