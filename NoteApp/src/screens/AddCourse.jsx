import React from 'react'
import ListCourse from '../components/ListCourse'








const AddCourse = ({courses,addNewCourse}) => {
    if (courses.length === 0) {
        return <p>No courses.</p>;
      }
  return (
    <div>
        <ListCourse courses = {courses} addNewCourse={addNewCourse}/>
    </div>
  )
}

export default AddCourse