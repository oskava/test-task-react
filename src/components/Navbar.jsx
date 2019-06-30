import React from 'react';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
   return (
      <nav className='nav'>
         <div className='item'>
            <NavLink to="/authorization">
               <span className='left-fixer'>
                  Authorization
               </span></NavLink>
         </div>
         <div className='item'>
            <NavLink to="/main">Main page</NavLink>
         </div>
         <div className='item'>
            <NavLink to="/about">About author</NavLink>
         </div>
      </nav>
   );
}

export default Navbar;