import React, {useState} from 'react'
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

  


    // const teacherAdd = props.currentUser.Teachers
    return (
        <div className="ProfilePage">
            <ProfileCard userdata={User} />
            {/* <TeacherCard teacherdata= {teacherAdd}/> */}
            <button className="button is-link is-outlined"><Link to='/newTeacherPost'>This is where Teachers go to create an add and Look For Students</Link></button>
            <button className="button is-danger is-outlined"><Link to='/newpost'>This is where students go if they need a Teacher</Link></button>
            <div>
                {tutorCards}
            </div>
            <div>




            <ProfileCard userdata= {User}/>
            {/* <TeacherCard teacherdata= {teacherAdd}/> */}
            
            <button className="button is-link is-outlined"><Link to ='/newTeacherPost'>Look For Students</Link></button>

            <button className="button is-danger is-outlined"><Link to ='/newpost'>Look for Teachers</Link></button>
            
            <div>
                {tutorCards}

            </div>


            <div class="box">
    <article class="media">
        <div class="media-left">
            <figure class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"/>
      </figure>
    </div>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                        <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                   </p>
             </div>
                    <nav class="level is-mobile">
                        <div class="level-left">
                            <a class="level-item" aria-label="reply">
                                <span class="icon is-small">
                                    <i class="fas fa-reply" aria-hidden="true"></i>
                                </span>
                            </a>
                            <a class="level-item" aria-label="retweet">
                                <span class="icon is-small">
                                    <i class="fas fa-retweet" aria-hidden="true"></i>
                                </span>
                            </a>
                            <a class="level-item" aria-label="like">
                                <span class="icon is-small">
                                    <i class="fas fa-heart" aria-hidden="true"></i>
                                </span>
                            </a>
                        </div>
                    </nav>
                </div>
  </article>
        </div>
        <ul>
          
        {props.studentsearch ? props.studentsearch.map(userInfo => (
            <li className={userInfo.userID}>
              <div className="" >{userInfo.userFirst} needs help with: {userInfo.userSkills}</div>
              <div className="" >You have {userInfo.percentage}% of the skill he is looking for</div>
              <div className="" >{userInfo.email}</div>
              <div className="" >he asks for help on {userInfo.postDate}</div>

            </li>
          )):""} 
          </ul>
       

        </div>

    )
    }




