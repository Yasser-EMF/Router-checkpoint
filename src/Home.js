import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ movies }) => {
  return (
    <div>
      <h1>Movie List</h1>
      <div className="movie-cards">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <Link to={`/movie/${movie.id}`}>
              <h2>{movie.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
