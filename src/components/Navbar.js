import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
   return (
      <nav className='nav'>
         <div className='item'>
          <a>Authorization</a>
         </div>
         <div className='item'>
          <a>Main page</a>
         </div>
         <div className='item'>
          <a>About author</a>
         </div>
       </nav>
   );
}

export default Navbar;