import React from 'react'
import "./style.css"
import { Link } from "react-router-dom";

export default function UserForm() {
  return (
    <div className="UserForm">
      <label className="label is-large">Sign Up:</label>
      <div className="field">
        <label className="label">First Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="John" />
        </div>
      </div>

      <div className="field">
        <label className="label">Last Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Smith" />
        </div>
      </div>

      <div className="field">
        <label className="label">UserName</label>
        <div className="control">
          <input className="input" type="text" placeholder="Create a Username" />
        </div>
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input className="input" type="text" placeholder="Email" />
        </div>
      </div>

      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input className="input" type="text" placeholder="Password" />
        </div>
      </div>



      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input type="checkbox" />
      I agree to the <a href="#">terms and conditions</a>
          </label>
        </div>
      </div>



      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link"><Link to='/profile'>Submit</Link></button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Cancel</button>
        </div>
      </div>

    </div>
  )
}
