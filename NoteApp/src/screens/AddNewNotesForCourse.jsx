import React, { useState } from 'react';
import SelectNoteCourse from '../components/SelectNoteCourse';

const AddNewNotesForCourse = ({ courses, addNewNotes, notes }) => {

  const [noteText, setNoteText] = useState('');

  const handleAddNote = (selectedCourse) => {
    console.log(selectedCourse)
    
    const newNote = {
      id: notes.length,
      text: noteText,
      course: {
        id: selectedCourse.id,
        name: selectedCourse.name
      },
      timestamp: new Date().toISOString()
    };
    addNewNotes(newNote);
    console.log(notes)
  };

  return (
    <div>
      Course:
      <SelectNoteCourse courses={courses} onFilterChange={handleAddNote}/>
      <input
        id="note-text"
        type="text"
        value={noteText}
        onChange={(event) => setNoteText(event.target.value)}
      />
      
      <button onClick={handleAddNote}>Add Note</button>
      
      
    </div>
    
  );
};

export default AddNewNotesForCourse;