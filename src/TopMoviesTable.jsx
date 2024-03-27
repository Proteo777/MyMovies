import React from 'react';

function TopMoviesTable({ movies, onRemoveMovie }) {
    const handleRemoveMovie = async (index) => {
        const movieId = movies[index].id;

        try {
            const response = await fetch(`http://localhost:3000/movies/${movieId}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            onRemoveMovie(index);
        } catch (error) {
            console.error('Error removing movie:', error);
        }
    };

    return (
        <table className="top-movies-table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {movies.map((movie, index) => (
                <tr key={index}>
                    <td>{movie.id}</td>
                    <td>{movie.title}</td>
                    <td>{movie.year}</td>
                    <td>{movie.director}</td>
                    <td>
                        <button onClick={() => handleRemoveMovie(index)}>Remove</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default TopMoviesTable;
