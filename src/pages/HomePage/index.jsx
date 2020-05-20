import React from 'react'
import "./style.css"

import Hero from '../../components/Hero';
import TeacherCard from '../../components/TeacherCard';
import CalendlyEmbed from '../../components/Calendly';

import Review from '../Review';



export default function HomePage() {
    return (
        <div className = "HomePage">

            <Review />

       

            <Hero/>
            {/* <TeacherCard/> */}
            
        </div>
    )
}
