import React, { Component } from 'react';
import '../styles/Form.css';

const emailRegex = RegExp(
   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = formErrors => {
   let valid = true;

   Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
   });
   return valid;
};

class Form extends Component {
   constructor(props) {
      super(props);

      this.state = {
         email: null,
         password: null,
         formErrors: {
            email: "",
            password: ""
         }
      };
   }

   handleSubmit = e => {
      e.preventDefault();

      if (formValid(this.state.formErrosr)) {
         console.log(`
            --SUBMITTING--
            Email: ${this.state.email}
            Password: ${this.state.password}
         `)
      } else {
         console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
      }
   };

   handleChange = e => {
      e.preventDefault();
      const { name, value } = e.target;
      let formErrors = this.state.formErrors;

      console.log("Name: ", name);
      console.log("Value: ", value);

      switch (name) {
         case 'email':
            formErrors.email =
               emailRegex.test(value) && value.length > 0
                  ? ""
                  : "invalid email address";
            break;
         case 'password':
            formErrors.password =
               value.length < 6 && value.length > 0
                  ? "minimum 6 characters required"
                  : "";
            break;
         default:
            break;
      }
   }

   render() {
      return (
         <div>
            <form onSubmit={this.handleSubmit} noValidate>
               <span className="form">
                  <label for="login">Login (email):</label>
                  <br />
                  <input
                     type="email"
                     className="space"
                     name="email"
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
}


export default Form;