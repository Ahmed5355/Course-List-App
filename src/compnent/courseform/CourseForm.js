import React, { useRef } from "react";
function CourseForm ( props){
    const inputRef = useRef()
 
    return(
        <>
            <form onSubmit={(e)=>{props.addCorse(e,inputRef)}}>
                <input type="text" ref={inputRef}/>
                <button type="submit">Add Course</button>
            </form>
        </>
    )
}
export default CourseForm;