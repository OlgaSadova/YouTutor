import React, {useState} from 'react'
import { Link } from "react-router-dom";
import API from '../../utils/API';
import {useHistory} from "react-router-dom";
import './style.css'


export default function Navbar(props) {
  const [visible, setVisible] = useState(true);
  
  
  function hideMe(){ 
    console.log(visible)
    setVisible(false); 
     
  }
  let styles = {display: 'inline'};

  if(!visible) styles.display = "none"
  function showMe(){ 
    console.log(visible)
    setVisible(true);  
  }

 


  const history = useHistory();

  const handleLogoutClick = event=>{
    API.logout().then(res=>{
        props.logoutHandle();
       history.push('/')
    })
}



    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <Link className="navbar-item" to ='/' >Home</Link>
      {/* onClick="showMe" */}
      {/* <Link to ='/'>Home</Link> */}
      {/* </a> */}
<div className="navbar-item" >
      <a  href="/about">
        About
      </a>
      </div>
      {/* <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          More
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider"/>
          <a className="navbar-item">
            Report an issue
          </a>
        </div>
      </div> */}

    </div>

     <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons" >
        {/* onClick={hideMe} */}
        {!props.currentUser? <Link className="button is-primary" style={styles}   to ='/signup'><strong>Sign up</strong></Link> :""}
          

        {!props.currentUser? <Link className="button is-light" style={styles}  onClick={hideMe} to ='/login'>Log In</Link> :""}

        {props.currentUser? <button className="button is-light" onClick = {handleLogoutClick} >Log Out</button> :""}

        
      
        </div>
      </div>
    </div> 
  </div>
</nav>
    )
    }