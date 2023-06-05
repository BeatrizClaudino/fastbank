import React from 'react';
import { slide as Menu } from 'react-burger-menu'


function BurgerMenu() {
  return (
    <>
    <Menu className='bg-white'>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/services">
        Services
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
    </>
  );
};

export default BurgerMenu;
