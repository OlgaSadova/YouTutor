import React from 'react'
import UserForm from '../../components/UserForm';
// import ImageUpload from '../../components/ImageWidget';
// import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

export default function SignUp(props) {

    // console.log(props);
    const submitHandler = props.submitHandler;
    return (
        <div>
            <UserForm submitHandler={submitHandler}/>
            
        </div>
    )
}
