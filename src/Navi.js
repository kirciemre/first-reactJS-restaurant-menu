import React, { useState } from "react";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from "reactstrap";
import CartSummary from "./CartSummary";
const Navi = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);
  var cart = [];
  
  cart = props.cart;
  return (
    <div>
      <Nav pills>
        <NavItem>
          <NavLink href="/" active>
            Voyage Restaurant
          </NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Sepet - {cart.length}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Sepet İçeriği</DropdownItem>
            <DropdownItem divider />
            <CartSummary cart={cart} />
          </DropdownMenu>
        </Dropdown>
        <NavItem>
        </NavItem>
        <NavItem>
          <NavLink href="#">Some Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            Disabled Link
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navi;
