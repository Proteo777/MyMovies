import React, { useState, useEffect } from 'react';
import AddMovieForm from './AddMovieForm';
import TopMoviesTable from './TopMoviesTable';
import './index.css';

function App() {
    const [page, setPage] = useState('home');
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

    const navigateTo = (page) => {
        setPage(page);
    };

    let pageContent;

    if (page === 'home') {
        pageContent = (
            <div className="container">
                <h1>Top Movies</h1>
                <p>Welcome to our movie database. Here you can explore a list of top movies and add new ones.</p>
            </div>
        );
    } else if (page === 'addMovie') {
        pageContent = (
            <div className="container">
                <h1>Add New Movie</h1>
                <AddMovieForm onAddMovie={handleAddMovie} />
            </div>
        );
    } else if (page === 'moviesList') {
        pageContent = (
            <div className="container">
                <h1>Movies List</h1>
                <TopMoviesTable movies={movies} onRemoveMovie={handleRemoveMovie} />
            </div>
        );
    }

    return (
        <>
            <nav>
                <button className="navbar-button"  onClick={() => navigateTo('home')}>Home</button>
                <button className="navbar-button"  onClick={() => navigateTo('addMovie')}>Add Movie</button>
                <button className="navbar-button"  onClick={() => navigateTo('moviesList')}>Movies List</button>
            </nav>
            {pageContent}
        </>
    );
}

export default App;
