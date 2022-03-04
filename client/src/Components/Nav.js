import React from "react";
import Navs from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Nav() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="">
            National Parks
          </Navbar.Brand>
          <Navs className="me-auto">
            <Navs.Link href="" className="">
              Home
            </Navs.Link>
            <Navs.Link href="" className="">
              Cats
            </Navs.Link>
            <Navs.Link href="" className="">
              Cat Toys
            </Navs.Link>
            <Navbar.Text></Navbar.Text>
          </Navs>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav;
