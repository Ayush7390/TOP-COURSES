import React from 'react'
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import {toast} from "react-toastify"
const Card = (props) => {
let course=props.course;
let likedcourses=props.likedcourses;
let setlikedcourses=props.setlikedcourses;
function clickHandler(){
  if (likedcourses.includes(course.id)){
    // already liked
    setlikedcourses((prev)=>(
      prev.filter((cid)=>cid!==course.id)
      ))
      toast.warning("Like removed");
      
  }
  else{
    setlikedcourses((prev)=>[...prev,course.id])
    toast.success("Liked")
  }
}
  return (

    <div className='bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden'>
        <div className='relative' >
            
            <img src={course.image.url} alt="" />
            <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
              <button onClick={clickHandler}>{
                likedcourses.includes(course.id)?( <FcLike fontSize={"1.75rem"}/>):( <FcLikePlaceholder fontSize={"1.75rem"}/>)
              }
                
       
              </button>
        </div>

        </div>
        
        <div className='p-4'>
                <p className='text-white text-lg font-semibold leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>
                    {
                        course.description.length>100?(course.description.substring(0,100)+"..."):(course.description)
                    }

                </p>
            </div>
    </div>
  )
}

export default Card