import SaveCourse from "./SavaCourse";


const ListCourse = ({ courses, addNewCourse}) => {
  return (
    <div>
      <SaveCourse addNewCourse={addNewCourse} />
    </div>
  );
};

export default ListCourse;