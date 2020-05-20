import React, { useState } from 'react'
import "./style.css"
import { useHistory } from "react-router-dom";
import API from "../../utils/API"
import { Link } from "react-router-dom";
import FilterSkills from '../../components/Filter';



export default function NewStudentPost(props) {
    console.log(props.currentUser.email);
    
        const [userState, setUserState] = useState({
          skills: [],
            about: ""
            
        });
        const history = useHistory();

        const loginState = {
          email:props.currentUser.email
          
        }
        
        const handleInputChange = event => {
          const { name, value } = event.target;
          setUserState({
              ...userState,
              [name]: value
          })
        };
        
        
        const handleFormSubmit = event => {
          event.preventDefault();

          API.createStudentPost(userState).then(newUser => {
              console.log(newUser)
              setUserState({
                
                about: ""
              })
              console.log(userState.skills);
              
              API.saveStudentSkills(userState.skills)
                .then(result => {
                  console.log(result)
                })
                .catch(err => {
                  console.log(err);
                })

                  API.login(loginState)
                  .then(res=>{
                      console.log(res.data);
                      props.submitHandler(res.data)
                  })
                
              
              history.push("/profile");
          })
        
        }

        const getSkills = chosen => {
          console.log(userState.skills);
          let chosenskills = chosen;
          setUserState({
            ...userState,
            skills: chosenskills
        })
        console.log(userState.skills);
        
        }
        
        
            return (
                <div className = "UserForm">
                  <label className="label is-large">Post your Add as a Student:</label>
                  <FilterSkills getSkills={getSkills}/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                    
        
        <div className="field">
          <label className="label">About</label>
          <div className="control">
            <input className="input" type="text" onChange={handleInputChange} name="about" value={userState.about} placeholder="About"/>
          </div>
        </div>
        
        
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={handleFormSubmit}>
              Submit
            </button>
          </div>
          <div className="control">
            <button className="button is-link is-light"><Link to ='/profile'>Cancel</Link></button>
          </div>
        </div>
        
        </div>
    )
}
