import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavBarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
        <NavLink to='/' activestyle>
            HomePage
          </NavLink>
          <NavLink to='/profile' activestyle>
            Profile
          </NavLink>
          <NavLink to='/newrecipe' activestyle>
            Add a new recipe
          </NavLink>
          <NavLink to='/search' activestyle>
            Search for a recipe
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;