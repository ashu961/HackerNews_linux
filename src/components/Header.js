import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="container-fluid ml-5 mr-5 mt-2 bg-danger">
        <div className="mx-auto">
          <Link to="#"> Hacker News </Link> <Link to="/new"> new </Link> |{" "}
          <Link to="#"> past </Link> | <a to="#">comments</a> |{" "}
          <Link to="#"> ask </Link> | <Link to="#"> show </Link> |{" "}
          <Link to="#">jobs</Link> | <Link to="#"> submit </Link>
          <Link className="float-right" to="#">
            login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
