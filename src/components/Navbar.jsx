import React from 'react';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
   return (
      <nav className='nav'>
         <div className='item'>
            <NavLink to="/authorization">
               <img src="https://cdn3.iconfinder.com/data/icons/geek-3/24/Death_Star_explode_star_wars-512.png" />
                  Authorization
               </NavLink>
         </div>
         <div className='item'>
            <NavLink to="/main">
            <img src="https://cdn3.iconfinder.com/data/icons/geek-3/24/R2D2_star_wars_droid_robot-512.png" />
            Main page</NavLink>
         </div>
         <div className='item'>
            <NavLink to="/about">
            <img src="https://cdn3.iconfinder.com/data/icons/geek-3/24/BB8_star_wars_movie_robot_droid-512.png" />About author</NavLink>
         </div>
      </nav>
   );
}

export default Navbar;