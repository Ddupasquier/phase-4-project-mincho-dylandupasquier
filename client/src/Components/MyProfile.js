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
  const [phone, setPhone] = useState();

function MyProfile() {

  function handleSubmit(e) {
    // e.preventDefault();
    fetch(`/api/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, city, state, image, email, phone }),
    }).then((res) => res.json())
      .then((updatedUser) => {
        console.log(updatedUser)
    });
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
        <button onClick={handleShow} className="button">
          Edit
        </button>
      </div>
      {/*  */}

}

export default MyProfile;
