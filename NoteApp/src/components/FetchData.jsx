import { useEffect } from "react";
import { useState } from "react";
import AddNewNotesForCourse from "../screens/AddNewNotesForCourse";
import ListCourse from "./ListCourse";



const FetchData = () => {
  const [courses, setCourses] = useState([]);


  useEffect(() => {
    const fetchCourse= async () => {
      const data = await fetch(
        'https://luentomuistiinpano-api.deta.dev/courses/'
      );
      let json = await data.json();
      // console.log(json);
      setCourses(json);
    };
    fetchCourse();
  }, []);
  console.log(courses)
  const addNewCourse = (course) => {
    setCourses([...courses, course]);
  };
  
  return (
    
    <div>
        <AddNewNotesForCourse courses={courses}/>
      <ListCourse courses={courses} addNewCourse={addNewCourse} />
    </div>
  );
};

export default FetchData;