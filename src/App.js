import React,{useState} from 'react'

import CourseForm from "./compnent/courseform/CourseForm";
import CourseList from "./compnent/courselist/CourseList";
function App() {

  const [course,setCourse] = useState([
    {name:'HTML'},
    {name:'CSS'},
    {name:'JS'},
  ])
  const handleDelete= (e)=>{
    let myCourses = course;
    myCourses.splice(e.target.id,1)
    // let allCourses = course.filter((ele) => {return  ele.name !== course[e.target.id].name})
    setCourse([...myCourses])
  }
  const courselist = course.map((ele,index)=>{
    return <CourseList data={ele} eleIndex={index} deletCourse={handleDelete}/>
  })

  const handleSubmit = (e,inputValue)=>{
    e.preventDefault()
    setCourse([...course,{name:inputValue.current.value}])
    inputValue.current.value = "";
   
  }


  return (
    <section className="App">
      <h1>All Courses</h1>
      <CourseForm addCorse={handleSubmit}/>
      <ul>{courselist}</ul>
    </section>
  );
}

export default App;
