import React, { useState, useEffect } from 'react'
import "./style.css"
import API from "../../utils/API"

export default function ProfileCard(props) {
    console.log(props.userdata.TeacherSkills);

    const [teacherSkillsArray, setTeacherArray] = useState([]);
    
    useEffect(() => {
    // if(props.userdata.Teacher){
    console.log(props.userdata.Teacher);
    
      API.getTeacherSkills(props.userdata.id)
                .then(res => {

                  const skillsArr = res.data.map(element => element.skill)


                  setTeacherArray(skillsArr)

                 // console.log("skillsArrsssssssss",skillsArr)
                  //console.log(teacherSkillsArray)
                  
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


{props.userdata.Studentpost ?
<div className="card">
<div className="card-image">
  
</div>
<div className="card-content">
  <div className="media">
    
    <div >
    <p className="title is-4">Your Student Post</p>

      <p className="title is-4">About: {props.userdata.Studentpost.about}</p>
      <p className="title is-4">SKILLS:</p>
      <ul>
        {props.userdata.StudentSkills.map(element => <li> {element.skill}</li>  )}
      </ul>
      

    </div>
  </div>

  
</div>
</div>
:""}

{props.userdata.Teacher ?
<div className="card">
<div className="card-image">
  
</div>
<div className="card-content">
  <div className="media">
    
    <div >
    <p className="title is-4">Your Teacher Post</p>

      <p className="title is-4">About: {props.userdata.Teacher.about}</p>
      <p className="title is-4">SKILLS:</p>
      <ul>
        {props.userdata.TeacherSkills.map(element => <li> {element.skill}</li>  )}
      </ul>

    </div>
   
  </div>

  
</div>

</div>
:""}

</div>

    )
    }
