import React from 'react'
import "./style.css"

export default function ProfileCard(props) {
    console.log(props);
    
    return (
      <div>
        <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src="http://placekitten.com/200/300" alt="Placeholder image"/>
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

  <p className="title is-4">Level: {props.userdata.Teacher.levels} </p>
      <p className="title is-4">Topics: {props.userdata.Teacher.skills}</p>
      <p className="title is-4">About: {props.userdata.Teacher.about}</p>
      <p className="title is-4">Posted On:{props.userdata.Teacher.createdAt.substring(0,10)}</p>

    </div>
  </div>

  
</div>
</div>
:""}
</div>

    )
}
