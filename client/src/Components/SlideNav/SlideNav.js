import React from "react";
import Nav from "./Nav";
import Carousel from "./Carousel";

function SlideNav({ user, setUser, username, setUsername }) {
  return (
    <>
      <Nav  username={username} setUsername={setUsername} user={user} setUser={setUser} />
      <Carousel />
    </>
  );
}

export default SlideNav;
