import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="navbar">
        <div className="navtitle">National Parks</div>
        <div className="navlink">
          <Link to="" className="link">Home | </Link>
          <Link to="" className="link">Parks | </Link>
          <Link to="" className="link">Campgrounds</Link>
        </div>
      </div>
      {/* <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="">
            <h2 className="navtitle">National Parks</h2>
          </Navbar.Brand>
          <Navs className="me-auto navlinks">
            <Navs.Link href="" className="">
              Home
            </Navs.Link>
            <Navs.Link href="" className="">
              Parks
            </Navs.Link>
            <Navs.Link href="" className="">
              Campgrounds
            </Navs.Link>
            <Navbar.Text></Navbar.Text>
          </Navs>
        </Container>
      </Navbar> */}
    </>
  );
}

export default Nav;
