import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/'>
            Fetch
          </NavLink>
          <NavLink to='/view'>
            View
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;