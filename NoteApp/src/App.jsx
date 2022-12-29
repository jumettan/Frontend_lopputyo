import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom'
import { useEffect } from "react";
import { useState } from "react";
import AddCourse from './screens/AddCourse';
import './App.css'
import Home from './screens/Home'
import AddNewNotesForCourse from './screens/AddNewNotesForCourse';
import ListNotes from './screens/ListNotes';


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
    localStorage.setItem('courses', JSON.stringify([...courses, course]));
  };
  const openInNewTab = url => {
    window.open(url,'_self');
    if (newWindow) newWindow.opener = null
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
  }
  }, []);
    
    const addNewNotes = (note) => {
        setNotes([...notes, note]);
        localStorage.setItem('notes', JSON.stringify([...notes, note]));
  };

  console.log("hello", courses)
  





  return (
    <div className="App">
      <div className='mainDiv'>
    <div className='header-left'>NotesApp</div>
    <button className = 'homeBTN' onClick={()=> openInNewTab("http://127.0.0.1:5173")}><ul   className='homeUL' >Home</ul></button>
    </div>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/AddCourse' element={<AddCourse courses = {courses} addNewCourse={addNewCourse}/>}/>
        <Route path='/AddNotes' element={<AddNewNotesForCourse courses ={courses} addNewNotes ={addNewNotes} notes = {notes}/>}/>
        <Route path='/ListNotes' element={<ListNotes notes = {notes} courses = {courses}/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
