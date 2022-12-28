import SaveCourse from "./SavaCourse";


const ListCourse = ({ courses, addNewCourse}) => {
    
  if (courses.length === 0) {
    return <p>No courses.</p>;
  }
  return (
    <div>
      <SaveCourse addNewCourse={addNewCourse} />
      
    </div>
  );
};

export default ListCourse;