import React from 'react'
import ProfileCard from "../../components/ProfileCard"
import "./style.css"
// import API from "../../utils/API"
import { Link } from "react-router-dom";
// import TeacherCard from '../../components/TeacherCard';
import StarRatingComponent from 'react-star-rating-component';




export default function Profile(props) {
  console.log(props);

  if(props.studentsearch[0]){
      console.log(props.studentsearch[0].percentage);
      
  }
    
    const User = props.currentUser;

    const updateTutorRating = (nextValue, prevValue, name) => {
        const dataToSupplyIntoAPI = {
            rating : nextValue,
            // review : <FreeFormText />
        }
        //API.saveReviews(dataToSupplyIntoAPI);
        console.log("newValue: ", nextValue, "prevValue: ", prevValue, "teacherID: ", name);
          }

const getTutors = () => {
//This is hardcoded. Need to implement to get the actual data from the server
/*Example: 
let reviews = [];
API.getReview().then((res)=> result = res.data);
return reviews
*/
  return [
      
      {id: 3, name: "Sveta", rating:3}
  ];
};

const tutors = getTutors();
const tutorCards = [];

for (let i=0; i < tutors.length; i++) {
const tutor = tutors[i];
    tutorCards.push(
        //This is where you should use the ACTUAL TeacherCard instead of the code below
        // <TeachCard teach={tutor} />
    <div>
        {tutor.name} : <StarRatingComponent name={tutor.id} value={tutor.rating} onStarClick={
            (nextValue, prevValue, name) => updateTutorRating(nextValue, prevValue, name)
            } />
     </div>
    );
  }

  


    // const teacherAdd = props.currentUser.Teachers
    return (


        <div className = "ProfilePage">

            <ProfileCard userdata= {User}/>
            {/* <TeacherCard teacherdata= {teacherAdd}/> */}
            
            <button className="button is-link is-outlined"><Link to ='/newTeacherPost'>Look For Students</Link></button>

            <button className="button is-danger is-outlined"><Link to ='/newpost'>Look for Teachers</Link></button>
            
            <div>
                {tutorCards}
            </div>

            
</div>
           
    )
}
