import { useState } from "react";

const ListCoursesLi = ({courses}) => {
    const [selectedCourse, setSelectedCourse] = useState("");
    return (
        <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
        {courses.map((course, i) => {
          return (
            <option key={i} value={course.id}>
              {course.name}
            </option>
          );
        })}
      </select>
    );
  };
  
  export default ListCoursesLi;