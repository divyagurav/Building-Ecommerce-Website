import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import cartContext from "../../strore/cart-context";

import classes from "./Header.module.css";

const Header = ({ onShow }) => {
  const CartCtx = useContext(cartContext);

  const numberOfCartItems = CartCtx.products.reduce((currNum, product) => {
    return currNum + product.quantity;
  }, 0);
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.list}>
          <h4>
            <NavLink to="/home" activeclassName={classes.active}>
              HOME
            </NavLink>
          </h4>

          <h4>
            <NavLink to="/" activeclassName={classes.active}>
              STORE
            </NavLink>
          </h4>
          <h4>
            <NavLink to="/about" activeclassName={classes.active}>
              ABOUT
            </NavLink>
          </h4>
        </div>
        <div className={classes.button}>
          <Button variant="outline-info" bg="dark" onClick={onShow}>
            Cart
          </Button>
          <p>{numberOfCartItems}</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
