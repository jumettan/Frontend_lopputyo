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
    const fetchCourse= async () => {
      const data = await fetch(
        'https://luentomuistiinpano-api.deta.dev/courses/'
      );
      let json = await data.json();
      setCourses(json);
    };
    fetchCourse();
  }, []);
    console.log(courses)
    const addNewCourse = (course) => {
        setCourses([...courses, course]);
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
  }, []);
    console.log(notes)
    const addNewNotes = (note) => {
        setNotes([...notes, note]);
  };





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
        <Route path='/AddNotes' element={<AddNewNotesForCourse/>}/>
        <Route path='/ListNotes' element={<ListNotes notes = {notes} courses = {courses}/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
