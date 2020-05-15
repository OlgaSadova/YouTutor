import React from 'react';
// import Rating from '../Rating';
import StarRatingComponent from 'react-star-rating-component';


export default function TeacherCard(props) {
  // console.log(props);
    return (
   
      <div className="card">
      <div className="card-image">
      <figure class="image is-96x96"/>
  <img src="https://bulma.io/images/placeholders/96x96.png"/>

          
      </div>
      <div className="card-content">
        <div className="media">
          
          <div className="media-content">
        <p className="title is-4">{props.name} {props.last}</p>
            <p className="subtitle is-6">{props.email}</p>
          </div>
        </div>
    
        <div className="content">
        {props.text} <a>{props.email}</a>.
          {/* <a href="#">#css</a> <a href="#">#responsive</a>
          <br/>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
        </div>
      </div>
   
    <StarRatingComponent/>
    </div>
        
     )
}
