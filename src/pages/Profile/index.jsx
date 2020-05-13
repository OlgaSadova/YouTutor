import React from 'react'
import ProfileCard from "../../components/ProfileCard"
import "./style.css"
import Table from "../../components/Table"


export default function index() {

    const mockProfile = {
        name: "Valerio",
        last: "Varani",
        username: "Valvarius",
        email: "mail@mail.com",
        password: "secret12234",
        isTutor: true,
        isStudent:true,
        subject: ["javascript", "html", "css"],
        text: "I have studied javascript extensively for millennia"
    }

    const studentPost = {
        title: "I need help!",
        category: "html",
        subject: "handlebars",
        text: "I know html very well but the way handlebars work has eluded me for decades!!"
    }

    const teacherPost = {
        subject: ["javascript", "html", "css"],
        text: "I have studied javascript extensively for millennia"
    }

    return (
   
        <div class = "ProfilePage">
        <ProfileCard mockProfile= {mockProfile}/> 
            <button className="btn" className="button is-link is-outlined">Look For Students</button>
            <button className="btn" className="button is-danger is-outlined">Look For Teachers</button>
            <Table/>  
        </div>
           
    )
}
