import React, { useState } from 'react'
import Card from './Card';
const Cards = (props) => {
    let courses=props.courses;
    let category=props.category;
    const [likedcourses,setlikedcourses]=useState([]);
    function getCourses(){
        if(category==="All"){
        let allCourses=[];
        Object.values(courses).forEach(element => {
            element.forEach(carddata=>{allCourses.push(carddata)})
        });
        return allCourses;
    }
    else{
        return courses[category]
    }
        
       
    }
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
            getCourses().map((course)=>(
                 <Card key={course.id} course={course} likedcourses={likedcourses} setlikedcourses={setlikedcourses} />
            ))
        }
    </div>
  )
}

export default Cards