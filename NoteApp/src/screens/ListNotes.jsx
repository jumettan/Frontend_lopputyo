import React, { useState } from 'react';
import ListCoursesLi from '../components/ListCoursesLi';

const ListNotes = ({ notes, courses }) => {
  const [filteredNotes, setFilteredNotes] = useState(notes);

  /*notes.forEach(note => {
    console.log(note.course);
  });
  courses.forEach(course => {
    console.log(`ID: ${course.id}, Name: ${course.name}`);
  });
  notes.forEach(({ course: { id, name } }) => {
    console.log(id);
    console.log(name);
  });*/
  const handleFilterChange = (selectedCourse) => {
    let filteredNotes;
    console.log(selectedCourse)
    if (selectedCourse.id === 'all') {
      filteredNotes = notes;
      console.log(filteredNotes)
    } else {
      
      console.log(notes)
      filteredNotes = notes.filter(note => note.course.id === selectedCourse.id || note.course.name === selectedCourse.name);
      setFilteredNotes(filteredNotes);
      console.log(filteredNotes)
    }
    setFilteredNotes(filteredNotes);
    console.log(filteredNotes)
  };
  

  return (
    <div>
      <div>ListNotes</div>
      Course:
      <ListCoursesLi courses={courses} onFilterChange={handleFilterChange} />

      {filteredNotes.map(note => (
        <div className="ListNotesCont" key={note.id}>
          <div className="noteCont">
            <div className="noteInfo">
              {note.timestamp} {note.course.name} (id {note.course.id})
            </div>
            <div className="noteText">{note.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListNotes;