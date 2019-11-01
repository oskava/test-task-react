import React, { Component } from 'react';
import '../styles/Form.css';

class Form extends Component {

   render() {
      return (
         <div>
            <form  noValidate>
               <span className="form">
                  <label for="login">Login (email):</label>
                  <br />
                  <input
                     type="email"
                     className="space"
                     name="email"
                     placeholder="name@email.com"
                     noValidate      
                  />    
                  <br />
                  <label for="password">Password:</label>
                  <br />
                  <input
                     type="password"
                     className="space"
                     name="password"
                     placeholder="your password"
                     noValidate
                  />
                  <br />

               </span>
               <button type="submit" value="" className="button" >Sign in</button> <br />
               <button type="submit" value="" className="button" >Register</button>
            </form>
         </div>
      );
   }
}


export default Form;