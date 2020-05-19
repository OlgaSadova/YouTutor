import React,  {useState } from 'react'
import TeacherCard from '../../components/TeacherCard'
import StarRatingComponent from 'react-star-rating-component';
import { useHistory } from 'react-router';

export default function Review(props) {
    const [userReview, setUserReview] = uaeState({
        rating:"",
        review:""
    });
    
    const history = useHistory();
     
    const handleInputChange = event => {
        const { name, value } = event.target;
        setUserState({
            ...userState,
            [name]: value
        })
      };

      const handleFormSubmit = event => {
        event.preventDefault();
        console.log("inside the handleformsubmit");
        console.log(userState);
        
        
        API.getReview(userState).then( newReview => {
            console.log(userState)
            setUserState({
                rating:"",
                review:""
            })

              API.saveReview(userState.skills)
              .then(result => {
                console.log(result)
              })
              .catch(err => {
                console.log(err);
              })
            

              
            
            
            history.push("/profile");
        })
      
      }

    


   

    return (
        <div>
            <TeacherCard 

        </div>

        
     )
}
    

    
    
    







