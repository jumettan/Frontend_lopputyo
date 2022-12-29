import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom'
import { useEffect } from "react";
import { useState } from "react";
import AddCourse from './screens/AddCourse';
import './App.css'

import AddNewNotesForCourse from './screens/AddNewNotesForCourse';
import ListNotes from './screens/ListNotes';
import Nav from './components/Navigation';
import HomePage from './screens/HomePage';


function App() {

  const [courses, setCourses] = useState([]);


  useEffect(() => {
    const fetchCourse = async () => {
      const data = await fetch(
        'https://luentomuistiinpano-api.deta.dev/courses/'
      );
      
      let json = await data.json();
      setCourses(json);
      localStorage.setItem('courses', JSON.stringify(json));
      
    };
  
    const savedCourses = localStorage.getItem('courses');
    if (savedCourses) {
      setCourses(JSON.parse(savedCourses));
      
      
    } else {
      
      fetchCourse();
    }
  }, []);
    
  const addNewCourse = (course) => {
    setCourses(courses => [...courses, course]);
    // valmis pusku localsotrageen mitä jouduin käyttämään silloin kun käytin browserRouteria Router,route,routes
    //sama homma notes ja courses
    //localStorage.setItem('courses', JSON.stringify([...courses, course]));
  };

  const [notes, setNotes] = useState([]);


  useEffect(() => {
    const fetchNotes= async () => {
      const dataN = await fetch(
        'https://luentomuistiinpano-api.deta.dev/notes/'
      );
      let json = await dataN.json();
      setNotes(json);
    };
    fetchNotes();
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
      
    } else {
      fetchNotes();
    }
  }, []);
    
  const addNewNotes = (note) => {
    setNotes(notes => [...notes, note]);
    //localStorage.setItem('notes', JSON.stringify([...notes, note]));
  };

  console.log("hello", courses)
  





  return (
    <div className="App">
      <div className='mainDiv'>
      <div className='header-left'>NotesApp</div>
      </div>
    <Router>
    <Nav/>
    <div className="Content">
      <Routes>
        <Route path='/' element = {<HomePage/>}/>
        <Route path='/AddCourse' element={<AddCourse courses={courses} addNewCourse={addNewCourse}/>}/>
        <Route path='/AddNotes' element={<AddNewNotesForCourse courses ={courses} addNewNotes ={addNewNotes} notes = {notes}/>}/>
        <Route path='/ListNotes' element={<ListNotes notes = {notes} courses = {courses} setNotes = {setNotes}/>}/>
      </Routes>
      </div>
    </Router>
    </div>
  )
}

export default App
