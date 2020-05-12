import React from 'react'
import "./style.css"
import UserForm from '../../components/UserForm';
import Hero from '../../components/Hero';

export default function HomePage() {
    return (
        <div className = "HomePage">
            <Hero/>
            <UserForm/>
        </div>
    )
}
