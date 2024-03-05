
import React, { useState } from "react";
function CourseList (props){
    const [state,setState] =useState(false);
    const toggileFun = ()=>{
        setState(!state)
    }

    const updataInputVaule = (e)=>{
            props.data.name = e.target.value
    }
    const formUpdate = ()=>{
        return(
            <form>
                <input type="text" onChange={updataInputVaule} defaultValue={props.data.name}/>
                <button onClick={toggileFun}>UpDate Course</button>
            </form>
        )
    }
    const course = () => {
        return(
            
            <li key={props.index}>
                <span>{props.data.name}</span>
                <button onClick={toggileFun}>Edit Course</button>
                <button id={props.index} onClick={props.deletCourse}>Delete Course</button>
                
            </li>
        )
    }

  

    return(
        <>
            {state?formUpdate():course()}
        </>
    )
}
export default CourseList;