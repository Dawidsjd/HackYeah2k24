import React from 'react';
import Sidebar from '../Global/Sidebar';
import { courses } from './Courses';



const Course = () => {
  return (
    <div className="flex bg-primary">
      <Sidebar />
      <div className="flex-1 m-4 rounded-sm p-2">
        {courses.map((cours)=>(
      <div className='jacek'><h2>{cours.title}</h2>
      <p> {cours.introduction}</p>
      </div>
    ))}

      </div>
    </div>
   
    

    
  );
  
};

export default Course;
