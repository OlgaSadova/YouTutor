import React, { useState } from 'react'
import "./style.css"
import { useHistory } from "react-router-dom";
import API from "../../utils/API"
import { Link } from "react-router-dom";
import FilterSkills from '../../components/Filter';



export default function NewStudentPost() {
    
        const [userState, setUserState] = useState({
          skills: [],
            post: ""
            
        });
        const history = useHistory();
        
        const handleInputChange = event => {
          console.log(event)
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
                level: "",
                post: ""
              })

              API.getTeacherMatch({skills:userState.skills})
              .then(newUser => {
                console.log("MATCH RESULT TUDENT SKILLS FOR TEACHERS: ",newUser.data)
                // setUserState({
                //   level: "",
                //   post: ""
                // })
              })
              .catch(err => {
                console.log(err);
              })

              API.saveStudentSkills(userState.skills)
                .then(result => {
                  console.log(result)
                })
                .catch(err => {
                  console.log(err);
                })
              
              history.push("/profile");
          })
        
        }

        const getSkills = chosen => {
          console.log(chosen)
          let chosenskills = chosen;
          setUserState({
            
            skills: chosenskills
        })
        
        
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
                    
                {/* <div className="field">
          <label className="label">Skill Level</label>
          <div className="control">
            <input className="input" type="text" onChange={handleInputChange} name="level" value={userState.level} placeholder="1 to 10"/>
          </div>
        </div> */}
        
        <div className="field">
          <label className="label">Post</label>
          <div className="control">
            <input className="input" type="text" onChange={handleInputChange} name="post" value={userState.post} placeholder="Javascript"/>
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
