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

            { id: 3, name: "Sveta", rating: 3 }
        ];
    };

    const tutors = getTutors();
    const tutorCards = [];

    for (let i = 0; i < tutors.length; i++) {
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

    return (

        <div classNameName="ProfilePage">

            <div className="columns ">
                <div className="column is-2">
                    <ProfileCard userdata={User} />
                    {/* <TeacherCard teacherdata= {teacherAdd}/> */}


                </div>

                <div className="column is-4">
                    <button className="button is-link is-outlined tutor-button"><Link to='/newTeacherPost'>CLICK HERE TO LOOK FOR STUDENT</Link></button>
                    <ul>

                        {props.studentsearch ? props.studentsearch.map(userInfo => (

                            <li key={userInfo.userID}>
                                <div className="box studentbox">
                                    <article className="media">
                                        <div className="media-left">
                                            <figure className="image is-64x64">
                                                <img src={userInfo.studentResults ? userInfo.studentResults[0].User.picture : "https://bulma.io/images/placeholders/128x128.png"} alt="picture" />
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <div className="content">
                                                <p>
                                                    <strong>{userInfo.studentResults ? userInfo.studentResults[0].User.first_name + " " + userInfo.studentResults[0].User.last_name : ""}</strong> <small> asks for help on {userInfo.postDate}</small>
                                                    <br />
                                                    <strong>This student is looking fot tutor</strong>
                            You have  <strong>{Math.floor(userInfo.percentage)}%</strong> of the skill he is looking for.
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
                    <div calssName="palceholder"></div>
                </div>
                <div className="column is-4">
                    <button className="button is-danger is-outlined tutor-button"><Link to='/newpost'>CLICK HERE TO LOOK FOR TEACHER</Link></button>


                    <ul>
                        {props.teachersearch ? props.teachersearch.map(userInfo => (

                            <li key={userInfo.userID}>
                                <div className="box teacherbox">
                                    <article className="media">
                                        <div className="media-left">
                                            <figure className="image is-64x64">
                                                <img src={userInfo.teacherResults ? userInfo.teacherResults[0].User.picture : "https://bulma.io/images/placeholders/128x128.png"} alt="picture" />
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <div className="content">
                                                <p>
                                                    <strong>{userInfo.teacherResults ? userInfo.teacherResults[0].User.first_name + " " + userInfo.teacherResults[0].User.last_name : ""}</strong> <small>asks for help on {userInfo.postDate}</small>
                                                    <br />
                                                    <strong></strong>
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
                <div className="column is-2">



                    {props.currentUser.Teacher ?
                        <div className="card">
                            <div className="card-image">

                            </div>
                            <div className="card-content">
                                <div className="media">

                                    <div >
                                        <p className="title is-4">Your Teacher Post</p>

                                        <p className="title is-4">About: {props.currentUser.Teacher.about}</p>
                                        <p className="title is-4">SKILLS:</p>
                                        <ul>
                                            {props.currentUser.TeacherSkills.map(element => <li> {element.skill}</li>)}
                                        </ul>

                                    </div>
                                </div>


                            </div>
                        </div>
                        : ""}

                    {props.currentUser.Studentpost ?
                        <div className="card">
                            <div className="card-image">

                            </div>
                            <div className="card-content">
                                <div className="media">

                                    <div >
                                        <p className="title is-4">Your Student Post</p>

                                        <p className="title is-4">About: {props.currentUser.Studentpost.about}</p>
                                        <p className="title is-4">SKILLS:</p>
                                        <ul>
                                            {props.currentUser.StudentSkills.map(element => <li> {element.skill}</li>)}
                                        </ul>


                                    </div>
                                </div>


                            </div>
                        </div>
                        : ""}






                </div>



            </div>













        </div>

    )
}




