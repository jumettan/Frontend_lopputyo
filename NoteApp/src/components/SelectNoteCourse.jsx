const SelectNoteCourse = ({ courses,  onFilterChange }) => {
    const handleChange = (event) => {
        const selectedCourse = {
          id: event.target.value,
          name: event.target.options[event.target.selectedIndex].text
        };
        onFilterChange(selectedCourse);
      };
    
      return (
        <select onChange={handleChange}>
          
          {courses.map(course => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
      );
    };

export default SelectNoteCourse;