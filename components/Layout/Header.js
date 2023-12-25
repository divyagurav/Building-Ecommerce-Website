import React from "react";
import Button from "react-bootstrap/Button";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.list}>
        <h4>HOME</h4>
        <h4>STORE</h4>
        <h4>ABOUT</h4>
      </div>
      <div className={classes.button}>
        <Button variant="outline-info" bg="dark">
          Cart
        </Button>
        <p>0</p>
      </div>
    </header>
  );
};

export default Header;
