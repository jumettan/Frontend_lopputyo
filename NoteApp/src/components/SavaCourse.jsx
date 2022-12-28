import React from 'react'

import { useState } from "react";

const SaveCourse = ({addNewCourse}) => {
    const [name, setName] = useState("");
  
  
    const handleSave = (e) => {
      if (name === "") {
        return;
      }
      let NewCourse = { id: 5, name : name };

      addNewCourse(NewCourse);
      setName("");
      console.log(NewCourse)
    };
    
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
      </div>
    );
  };

export default SaveCourse