import React, { useState } from 'react'
import "./style.css"
import { useHistory } from "react-router-dom";
import API from "../../utils/API"
import { Link } from "react-router-dom";
import FilterSkills from '../../components/Filter';



export default function NewStudentPost(props) {
    console.log(props);
    
        const [userState, setUserState] = useState({
          skills: ["None"],
            about: ""
            
        });
        const history = useHistory();

        const loginState = {
          email:props.currentUser.email
          
        }
        
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
          
        API.deleteCurrentPost()
        .then(result => {
          //  console.log("PreviousPostDeleted: " + result);
          API.createStudentPost(userState)
          .then(newUser => {
              console.log(newUser)
              setUserState({
                about: ""
              })
              API.deleteStudentSkills()
              .then(result => {
                // console.log("Skills deleted from current User: " + result);
                API.saveStudentSkills(userState.skills)
                .then(result => {
                  // console.log("Skills saved to current User: " + result);
                  API.login(loginState)
                  .then(res=>{
                      console.log(res.data);
                      props.submitHandler(res.data)
                      history.push("/profile");
                  })
                })
                .catch(err => {
                  console.log(err);
                })
              })
              .catch(err => {
                console.log(err);
              })
            })
            .catch(err => {
              console.log(err);
            })
          })
          .catch(err => {
            console.log(err);
          })

          

              API.getTeacherMatch({skills:userState.skills.join(",")})
              .then(newUser => {
                console.log("MATCH RESULT STUDENT SKILLS FOR TEACHERS: ",newUser.data)
                props.passTeachers(newUser.data);
              })
              .catch(err => {
                console.log(err);
              })
        
        }

        const getSkills = chosen => {
          console.log(chosen)
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
