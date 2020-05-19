import React, { useState, useEffect } from 'react'
import "./style.css"
import API from "../../utils/API"

export default function ProfileCard(props) {
    console.log(props.userdata.id);

    const [teacherSkillsArray, setTeacherArray] = useState([]);
    
    useEffect(() => {
    // if(props.userdata.Teacher){
    console.log(props.userdata.Teacher);
    
      API.getTeacherSkills(props.userdata.id)
                .then(res => {

                  const skillsArr = res.data.map(element => element.skill)


                  setTeacherArray(skillsArr)

                  console.log(skillsArr)
                  console.log(teacherSkillsArray)
                  
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
        <p className="title is-4">{props.userdata.zipcode}</p>

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

  <p className="title is-4">Level: {props.userdata.Studentpost.level} </p>
      <p className="title is-4">Topics{props.userdata.Studentpost.post}</p>
      <p className="title is-4">Posted On:{props.userdata.Studentpost.createdAt.substring(0,10)}</p>

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

      <p className="title is-4">Skills:{teacherSkillsArray[0]}</p>
      <ul>
        {teacherSkillsArray.map(element => <li> {element}</li>  )}
      </ul>

    </div>
  </div>

  
</div>
</div>
:""}
</div>

    )
    }
