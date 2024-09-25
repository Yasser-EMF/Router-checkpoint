import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import MovieDetails from './MovieDetails';
import './App.css';
const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
    </Router>
  );
};

export default App;
