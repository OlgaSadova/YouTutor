import React,  {useState } from 'react'
import StarRatingComponent from 'react-star-rating-component';
import { useHistory } from 'react-router';
import { Link } from "react-router-dom";
import API from "../../utils/API"

export default function Review(props) {
    
    const [userReview, setUserReview] = useState({
        rating:"",
        review:""
    });
  
    const history = useHistory();
     
    const handleInputChange = event => {
        const { name, value } = event.target;
        setUserReview({
            ...userReview,
            [name]: value
        })
      };

      const handleFormSubmit = event => {
        event.preventDefault();
        console.log("inside the handleformsubmit");
        // console.log(userState);
        
        
        API.getReview(userReview.then( newReview => {
            // console.log(userState)
            console.log(newReview)
            setUserReview({
                rating:"",
                review:""
            })

              API.saveReview(
                  userReview.rating
                  )
              .then(result => {
                console.log(result)
              })
              .catch(err => {
                console.log(err);
              })
            

              
            
            
            history.push("/profile");
        })
      
      

      )

    }
    

    return (
        <div>

           <div className="TeacherForm">
           <label className="label is-large">Create A Review:</label>

           <div className="field">
          <label className="label">Rating:</label>

          <div className="control"> <StarRatingComponent  value={userReview.rating}

        
         />
          </div> */}
        </div>

        <div className="field">
          <label className="label">Review:</label>
          <div className="control">
            <input className="input" type="text" onChange={handleInputChange} name="YearsofExperience" value={userReview.Review} placeholder="Review"/>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={handleFormSubmit}>
              Submit
            </button>
          </div>
          <div className="control">
            <button className="button is-link is-light"><Link to ='/profile'>Cancel</Link></button>
          </div>

            
            

        </div>

           
       





           </div>

        </div>

        
     )
}
    

    
    
    







