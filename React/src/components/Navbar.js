import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.scss';
import { GiGrapes } from 'react-icons/gi';

const Navbar = () => {
  return (
    <nav
      className='navbar is-primary'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='icon'>
        <GiGrapes />
        <p>Vinipedia</p>
      </div>
      <div className='container'>
        <div className={`navbar-menu ${'is-active'}`}>
          <div className='navbar-start'>
            {/* <NavLink
              className='navbar-item'
              activeClassName='is-active'
              to='/'
              exact
            >
              Página Inicial
            </NavLink> */}

            <NavLink
              className='navbar-item'
              activeClassName='is-active'
              to='/wines'
            >
              Vinhos
            </NavLink>

            <NavLink
              className='navbar-item'
              activeClassName='is-active'
              to='/producers'
            >
              Produtores
            </NavLink>

            <NavLink
              className='navbar-item'
              activeClassName='is-active'
              to='/grapes'
            >
              Castas
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
