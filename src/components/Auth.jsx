import React from 'react';
import classes from '../styles/Auth.css';

const Auth = (props) => {
   return (
      <div className={classes.Auth}>
         <div>
            <h2>Authorization</h2>

            <form action="" method="post">
               <label for="login">Login (email):</label>
               <br />
               <input tupe="text" id="login"></input>
                  <br />
                  <label for="password">Password:</label>
                  <br />
                  <input type="password" name="password" id="password"></input>
                     <br />
                     <input type="submit" value="Sign in"></input>
                     <input type="submit" value="Register"></input>
            </form>
         </div>
      </div>
               );
            }
            
export default Auth;