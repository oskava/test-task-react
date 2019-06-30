import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
   return (
      <nav className='nav'>
         <div className='item'>
          <a href="/authorization">Authorization</a>
         </div>
         <div className='item'>
          <a href="/main">Main page</a>
         </div>
         <div className='item'>
          <a href="/about">About author</a>
         </div>
       </nav>
   );
}

export default Navbar;