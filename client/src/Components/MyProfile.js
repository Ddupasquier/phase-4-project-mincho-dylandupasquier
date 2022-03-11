import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
function MyProfile({ user, username, setUsername }) {
  const [show, setShow] = useState(false);
  const [image, setImg] = useState(user.image);
  const [city, setCity] = useState(user.city);
  const [state, setState] = useState(user.state);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const handleClose = () => {
    window.location.reload(false);
    setShow(false);
  };
  const handleShow = () => {
    setUsername(user.username);
    setShow(true);
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/api/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, city, state, image, email, phone }),
<<<<<<< HEAD
    }).then((res) => res.json())
      .then((updatedUser) => {
        console.log(updatedUser)
    });
=======
    }).then((res) => res.json());
>>>>>>> main
  }

  console.log(user.image);

  return (
    <>
      <div className="myProfile">
        <div className="userImage">
          {user.image !== null ? (
            <img src={user.image} alt={user.username} />
          ) : (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
              alt="placeholder"
            />
          )}
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
        <button onClick={handleShow} className="button editbtn">
          Edit
        </button>
      </div>

<<<<<<< HEAD
=======
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
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <br />
            <input
              type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImg(e.target.value)}
            ></input>
            <br />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            ></input>
            <br />
            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            ></input>
            <br />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <br />
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></input>
            <br />
            <button type="submit" className="button" onClick={handleClose}>
              All Done!
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
>>>>>>> main
}

export default MyProfile;
