import React from 'react';
import Sidebar from '../Global/Sidebar';
import { courses } from './Courses';



const Course = () => {
  return (
    <div>
      
    {courses.map((cours)=>(
      <div><h2>{cours.title}</h2>
      <p> {cours.introduction}</p>
      </div>
    ))}


    </div>
  );
  
};

export default Course;
