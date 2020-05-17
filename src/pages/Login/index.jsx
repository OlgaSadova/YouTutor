import React, {useState} from 'react'
import { Link } from "react-router-dom";
import API from "../../utils/API"
import {useHistory} from "react-router-dom"

export default function Login(props) {
const [loginState, setLoginState] = useState({
  email:"",
  password:""
})

const history = useHistory();

const handleInputChange = event=>{
  const {name,value} = event.target;
  setLoginState({
      ...loginState,
      [name]:value
  })
}

const handleFormSubmit = event=>{
  event.preventDefault();
  // console.log(loginState);
  
  API.login(loginState).then(res=>{
      console.log(res.data);
      if(res.data){
          props.submitHandler(res.data)
          history.push("/profile");
      } else {
          props.submitHandler(false)
      }

  })
}

const handleSessionBtnClick = event=>{
  event.preventDefault();
  API.readSessions().then(res=>{
      console.log(res.data);
  })
}


    return (
        <div className = "UserForm">
        <label className="label is-large">Credentials:</label>
    <div className="field">
<label className="label">Email</label>
<div className="control">
<input className="input" type="text" placeholder="email" name = 'email' onChange = {handleInputChange} value = {loginState.email}/>
</div>
</div>

<div className="field">
  <label className="label">Password</label>
  <div className="control">
     <input type="password" className="input" placeholder="password" name = 'password' onChange = {handleInputChange} value = {loginState.password}/>
  </div>
</div>



<div className="field is-grouped">
<div className="control">
<button className="button is-link" onClick={handleFormSubmit}>Submit</button>
</div>
<div className="control">
<button className="button is-link is-light"><Link to ='/'>Cancel</Link></button>
<button onClick={handleSessionBtnClick}>check login status</button>
</div>
</div>
</div>


    )
}
