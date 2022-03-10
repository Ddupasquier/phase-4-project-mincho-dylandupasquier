import React from "react";
import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return (
    <Spinner animation="border" role="status" className="toCenter">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Loading;
