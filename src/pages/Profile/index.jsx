import React, { useState } from 'react'
import ProfileCard from "../../components/ProfileCard"
import "./style.css"
// import API from "../../utils/API"
import { Link } from "react-router-dom";
// import TeacherCard from '../../components/TeacherCard';
import StarRatingComponent from 'react-star-rating-component';




export default function Profile(props) {

    //const [studentsState, setStudentsState] = useState
    console.log(props);
    const SearchResultArr = []
    const User = props.currentUser;

    const updateTutorRating = (nextValue, prevValue, name) => {
        const dataToSupplyIntoAPI = {
            rating: nextValue,
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

<<<<<<< HEAD
  


    // const teacherAdd = props.currentUser.Teachers
=======
>>>>>>> c94f31d47e9b75b0e6ce5279c37f91325d07e78f
    return (
        <div classNameName="ProfilePage">
            <ProfileCard userdata={User} />
            {/* <TeacherCard teacherdata= {teacherAdd}/> */}
            <button classNameName="button is-link is-outlined"><Link to='/newTeacherPost'>This is where Teachers go to create an add and Look For Students</Link></button>
            <button classNameName="button is-danger is-outlined"><Link to='/newpost'>This is where students go if they need a Teacher</Link></button>
            <div>
                {tutorCards}
            </div>
            <div>
            </div>
            <ul>

                {props.studentsearch ? props.studentsearch.map(userInfo => (
                    
                    <li key={userInfo.userID}>
                        <div className="box studentbox">
                            <article className="media">
                                <div className="media-left">
                                    <figure className="image is-64x64">
                                        <img src={userInfo.studentResults ? userInfo.studentResults[0].User.picture: "https://bulma.io/images/placeholders/128x128.png"} alt="picture" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <p>
                                            <strong>{userInfo.studentResults ? userInfo.studentResults[0].User.first_name + " " + userInfo.studentResults[0].User.last_name : ""}</strong> <small>he asks for help on {userInfo.postDate}</small>
                                            <br />
                                            You have  <strong>{Math.floor(userInfo.percentage)}%</strong> of the skill he is looking for
                                            <br />
                                            Email: {userInfo.studentResults[0].User.email}
                                            we can also put his skills
                                            
                                            
                                      </p>
                                    </div>
                                    <nav className="level is-mobile">
                                        <div className="level-left">
                                            <a className="level-item" aria-label="reply">
                                                <span className="icon is-small">
                                                    <i className="fas fa-reply" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="retweet">
                                                <span className="icon is-small">
                                                    <i className="fas fa-retweet" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="like">
                                                <span className="icon is-small">
                                                    <i className="fas fa-heart" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </div>




                    </li>
                )) : ""}
            </ul>




            <ul>

{props.teachersearch ? props.teachersearch.map(userInfo => (
    
    <li key={userInfo.userID}>
        <div className="box teacherbox">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={userInfo.teacherResults ? userInfo.teacherResults[0].User.picture: "https://bulma.io/images/placeholders/128x128.png"} alt="picture" />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{userInfo.teacherResults ? userInfo.teacherResults[0].User.first_name + " " + userInfo.teacherResults[0].User.last_name : ""}</strong> <small>he asks for help on {userInfo.postDate}</small>
                            <br />
                            You have  <strong>{Math.floor(userInfo.percentage)}%</strong> of the skill he is looking for
                            <br />
                            Email: {userInfo.teacherResults[0].User.email}
                            we can also put his skills
                            
                            
                      </p>
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                            <a className="level-item" aria-label="reply">
                                <span className="icon is-small">
                                    <i className="fas fa-reply" aria-hidden="true"></i>
                                </span>
                            </a>
                            <a className="level-item" aria-label="retweet">
                                <span className="icon is-small">
                                    <i className="fas fa-retweet" aria-hidden="true"></i>
                                </span>
                            </a>
                            <a className="level-item" aria-label="like">
                                <span className="icon is-small">
                                    <i className="fas fa-heart" aria-hidden="true"></i>
                                </span>
                            </a>
                        </div>
                    </nav>
                </div>
            </article>
        </div>




    </li>
)) : ""}
</ul>


        </div>

    )
}




