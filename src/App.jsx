import React, { useState, useEffect } from 'react';
import AddMovieForm from './AddMovieForm';
import TopMoviesTable from './TopMoviesTable';

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/movies')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleAddMovie = (newMovie) => {
        setMovies([...movies, newMovie]);
    };

    const handleRemoveMovie = (index) => {
        const updatedMovies = [...movies];
        updatedMovies.splice(index, 1);
        setMovies(updatedMovies);
    };

    return (
        <div className="container">
            <h1>Top Movies</h1>
            <AddMovieForm onAddMovie={handleAddMovie} />
            <h2>Movies List</h2>
            <TopMoviesTable movies={movies} onRemoveMovie={handleRemoveMovie} />:
        </div>
    );
}

export default App;