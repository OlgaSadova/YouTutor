import React from 'react'
import UserForm from '../../components/UserForm';

export default function SignUp(props) {

    // console.log(props);
    const submitHandler = props.submitHandler;
    return (
        <div>
            <UserForm submitHandler={submitHandler}/>
        </div>
    )
}
