import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import './App.css';




function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<MovieList searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
          </div>
       
         </div>
         
    </Router>
    <Footer/>
  
    </div>
  );
}

export default App;
