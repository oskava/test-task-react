import React from 'react';
import '../styles/Header.css';

const Header = () => {
   return (
      <header className='header'>
         <div className='logo'>
            <img src='https://cdn3.iconfinder.com/data/icons/star-wars-color/181/stormtrooper-256.png' />
            <h1>Test Task</h1>
         </div>
      </header>
   );
}

export default Header;