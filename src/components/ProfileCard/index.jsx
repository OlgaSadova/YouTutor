import React, { useState, useEffect } from 'react'
import "./style.css"
import API from "../../utils/API"

export default function ProfileCard(props) {
    // console.log(props.userdata.TeacherSkills);

    const [teacherSkillsArray, setTeacherArray] = useState([]);
    
    useEffect(() => {
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
        <div className="box id-box">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={props.userdata.picture} alt="Placeholder image"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      
      <div >
      <p className="title is-5 center-content">Welcome {props.userdata.first_name}</p>
      <p className="title is-7 left-content"> We have <span classNane = "student-color">{props.studentsearch ? props.studentsearch.length : "some"}</span> students available for you and <span classNane = "teacher-color">{props.teachersearch ? props.teachersearch.length : "some"}</span> teachers.</p>

      </div>
    </div>

  </div>
</div>


</div>


    )
    }
