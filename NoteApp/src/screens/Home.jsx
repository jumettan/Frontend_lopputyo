import React from 'react'

const Home = () => {
    const openInNewTab = url => {
        window.open(url,'_self');
        if (newWindow) newWindow.opener = null
      };
  return (
    <h1> 
        
        <nav className='divContainer'>
        <ul className='divCreate' onClick={()=> openInNewTab("http://127.0.0.1:5173/AddNotes")}>Create notes for class</ul>
        <ul className='divList' onClick={()=> openInNewTab("http://127.0.0.1:5173/ListNotes")}>List Notes</ul>
        <div>
        <ul className='divAdd' onClick={() => openInNewTab("http://127.0.0.1:5173/AddCourse")}>Add Course</ul></div>
      </nav>
    </h1>
  )
}

export default Home