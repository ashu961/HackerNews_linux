import React from "react";

function Header() {
  return (
    <div>
      <div className="container-fluid ml-5 mr-5 mt-2 bg-danger">
        <div className="mx-auto">
          <a href="#"> Hacker News </a> <a href="#"> new </a> |{" "}
          <a href="#"> past </a> | <a href="#">comments</a> |{" "}
          <a href="#"> ask </a> | <a href="#"> show </a> | <a href="#">jobs</a>{" "}
          | <a href="#"> submit </a>
          <a className="float-right" href="#">
            login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
