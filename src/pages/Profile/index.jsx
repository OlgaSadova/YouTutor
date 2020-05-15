import React,{useEffect} from 'react'
import ProfileCard from "../../components/ProfileCard"
import "./style.css"
import API from "../../utils/API"
import { Link } from "react-router-dom";




export default function Profile(props) {


  console.log(props);
  

//   const User = props

//   useEffect(()=>{
//     API.getUserbyId(props.currentUser.id).then(res=>{
//       console.log(res)
      
//       var User = res.data
//       console.log(User)
//     })
    
// },[])


    // const mockProfile = {
    //     name: "Valerio",
    //     last: "Varani",
    //     username: "Valvarius",
    //     email: "mail@mail.com",
    //     password: "secret12234",
    //     isTutor: true,
    //     isStudent:true,
    //     subject: ["javascript", "html", "css"],
    //     text: "I have studied javascript extensively for millennia"
    // }

    // const studentPost = {
    //     title: "I need help!",
    //     category: "html",
    //     subject: "handlebars",
    //     text: "I know html very well but the way handlebars work has eluded me for decades!!"
    // }

    // const teacherPost = {
    //     subject: ["javascript", "html", "css"],
    //     text: "I have studied javascript extensively for millennia"
    // }
    const Userdata = props.currentUser;
    return (


        <div className = "ProfilePage">

            <ProfileCard userdata= {Userdata}/>
            
            <button className="button is-link is-outlined"><Link to ='/newpost'>Look For Students</Link></button>

            <button className="button is-danger is-outlined"><Link to ='/newTeacherPost'>Look For Teachers</Link></button>
            


            <table className="table">
                
  <thead>
    <tr>
      
      <th>Your Posts as a Student</th>
      
    </tr>
  </thead>
  
  <tbody>
    <tr>
    
      {/* <th>{studentPost.title}</th> */}
      
    </tr>
    
  </tbody>
</table>


        </div>
           
    )
}
