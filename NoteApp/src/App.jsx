import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom'
import AddCourse from './screens/AddCourse';
import './App.css'
import Home from './screens/Home'


function App() {
  const openInNewTab = url => {
    window.open(url,'_self');
    if (newWindow) newWindow.opener = null
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
        <Route path='/AddCourse' element={<AddCourse/>}/>
        
      </Routes>
    </Router>
    </div>
  )
}

export default App
