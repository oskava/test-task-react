import React from 'react';
import '../styles/Form.css';

const Form = (props) => {
   return (
      <div>
         <form className="demoForm">
            <span className="form">
               <label for="login">Login (email):</label>
               <br />
               <input
                  type="text"
                  className="space"
                  name="login"
                  placeholder="name@email.com"
                  noValidate
                  onChange={this.handleChange}
                  />
               <br />

               <label for="password">Password:</label>
               <br />
               <input
                  type="password"
                  className="space"
                  name="password"
                  placeholder="At least 6 symboles"
                  noValidate
                  onChange={this.handleChange} 
                  />
               <br />

            </span>
            <button type="submit" value="" className="button" >Sign in</button> <br />

            <button type="submit" value="" className="button" >Register</button>
         </form>
      </div>
   );
}


export default Form;