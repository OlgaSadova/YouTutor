import React, { useState } from 'react'
import "./style.css"
import { useHistory } from "react-router-dom";
import API from "../../utils/API"
import { Link } from "react-router-dom";
import FilterSkills from '../../components/Filter';




export default function NewTeacherPost(props) {

  console.log(props);
  
  
    
        const [userState, setUserState] = useState({
        skills: [],
        about: "",
        YearsofExperience:""
        

            
        });
        const history = useHistory();
        
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
          
          
          API.createTeacherPost(userState).then(newUser => {
              console.log(userState)
              setUserState({
                  // levels: "",
                  about: "",
                  YearsofExperience: ""
              })

                API.saveTeacherSkills(userState.skills)
                .then(result => {
                  console.log(result)
                })
                .catch(err => {
                  console.log(err);
                })
              

                
              
              
              history.push("/profile");
          })
        
        }
        
        
            return (
              <div>
              <FilterSkills getSkills={getSkills} />
                <div className = "UserForm">
                  
                    <label className="label is-large">Post your Add as a Teacher:</label>
                

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
