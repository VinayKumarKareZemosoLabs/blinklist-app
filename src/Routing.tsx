import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react'
import LibraryTemplate from './components/pages/LibraryPage/index';
import HomeTemplate from './components/pages/HomePage/index';
import BookTemplate from './components/pages/BookPage/index';

function Routing() {

  return (
    <Router>
        <Routes>
          <Route path="/library" element={<LibraryTemplate />} />
          <Route path="/bookdet/:bookId" element={<BookTemplate id={1} />} />
          <Route path="/" element={<HomeTemplate /> } />
        </Routes>
      </Router>
  )
}

export default Routing;