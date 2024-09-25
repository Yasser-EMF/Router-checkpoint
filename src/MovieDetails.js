import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const foundMovie = movies.find(movie => movie.id.toString() === id);
    setMovie(foundMovie);
  }, [id, movies]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-details">
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <iframe
            width="100%"
            height="315"
            src={movie.trailer}
            title={`${movie.title} trailer`}
            frameBorder="0"
            allowFullScreen
        ></iframe>
        <br />
        <Link to="/" className="back-link">Back</Link>
    </div>
);
};

export default MovieDetails;
