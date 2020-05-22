import React, { useState, useEffect } from 'react'
import "./style.css"
import API from "../../utils/API"

export default function ProfileCard(props) {
    // console.log(props.userdata.TeacherSkills);

    const [teacherSkillsArray, setTeacherArray] = useState([]);
    
    useEffect(() => {
    // if(props.userdata.Teacher){
    // console.log(props.userdata.Teacher);
    
      API.getTeacherSkills(props.userdata.id)
                .then(res => {

                  const skillsArr = res.data.map(element => element.skill)
                  setTeacherArray(skillsArr)
              })
              .catch(err => {
                console.log(err);
              })

            // }
          }, [])
    return (
      <div>
        <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={props.userdata.picture} alt="Placeholder image"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      
      <div >
    <p className="title is-4">{props.userdata.first_name} {props.userdata.last_name}</p>
        <p className="title is-4">{props.userdata.email}</p>

      </div>
    </div>

  </div>
</div>


</div>


    )
    }
