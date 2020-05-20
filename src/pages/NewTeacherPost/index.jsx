import React, { useState } from 'react'
import "./style.css"
import { useHistory } from "react-router-dom";
import API from "../../utils/API"
import { Link } from "react-router-dom";
import FilterSkills from '../../components/Filter';




export default function NewTeacherPost(props) {

  
  
    
        const [userState, setUserState] = useState({
        skills: [],
        // levels: "",
        about: "",
        YearsofExperience:""
           
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

        const getSkills = chosen => {
          let chosenskills = chosen;
          setUserState({
            
            skills: chosenskills
        })
        
        
        }
        
        
        const handleFormSubmit = event => {
          event.preventDefault();
          console.log("inside the handleformsubmit");
          console.log(userState);

          API.deleteTeacherCurrentPost()
        .then(result => {
          //  console.log("PreviousPostDeleted: " + result);
          API.createTeacherPost(userState)
          .then(newUser => {
              console.log(newUser)
              setUserState({
                about: "",
                YearsofExperience:""
              })
              API.deleteTeacherSkills()
              .then(result => {
                console.log("Skills deleted from current User: " + result);
                API.saveTeacherSkills(userState.skills)
                .then(result => {
                  console.log("Skills saved to current User: " + result);
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
          
         
        
        }
        
        
            return (
              <div>
              <FilterSkills getSkills={getSkills} />
                <div className = "UserForm">
                  
                    <label className="name" className="label is-large">Post your Add as a Teacher:</label>
                {/* <div className="field">
          <label className="label">Skills</label>
          <div className="control">
            <input className="input" type="text" onChange={handleInputChange} name="skills" value={userState.skills} placeholder="1 to 10"/>
          </div>
        </div>  */}
        
        {/* <div className="field">
          <label className="label">Levels</label>
          <div className="control">
            <input className="input" type="text" onChange={handleInputChange} name="levels" value={userState.levels} placeholder="Javascript"/>
          </div>
        </div> */}

        <div className="field">
          <label className="label">About</label>
          <div className="control">
            <input className="input" type="text" onChange={handleInputChange} name="about" value={userState.about} placeholder="About"/>
          </div>
        </div>

        

        <div className="field">
          <label className="label">YearsofExperience</label>
          <div className="control">
            <input className="input" type="text" onChange={handleInputChange} name="YearsofExperience" value={userState.YearsofExperience} placeholder="YearsofExperience"/>
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

        </div>
    )
}
