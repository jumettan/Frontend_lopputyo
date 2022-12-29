import React from 'react'

import { useState } from "react";

const SaveCourse = ({courses,addNewCourse}) => {
    const [name, setName] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    
    const handleSave = (e) => {
      if (name === "") {
        return;
      }
      let NewCourse = 
      { id: courses.length, name : name };

      addNewCourse(NewCourse);
      setName(name);
      console.log(NewCourse)
      setShowSuccessMessage(true);
      setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
    };
    if (courses.length === 0) {
      return <div>
      <input
        type="text"
        name="course"
        placeholder="Course name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSave}>Add course</button>
      <p>currently there are no courses</p>
    </div>;
    }
    
    return (
      <div>
        <input
          type="text"
          name="course"
          placeholder="Course name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSave}>Add course</button>
        {showSuccessMessage && (
        <p>
          Course added with id "{courses.length -1}" and name "{name}" succesfully!
        </p>
      )}
      </div>
    );
  };

export default SaveCourse