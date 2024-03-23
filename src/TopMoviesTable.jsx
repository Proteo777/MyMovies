import React from 'react';

function TopMoviesTable({ movies, onRemoveMovie }) {
    return (
        <table className="top-movies-table">
            <thead>
            <tr>
                <th>Numer</th>
                <th>Tytuł</th>
                <th>Rok</th>
                <th>Reżyser</th>
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
                        <button onClick={() => onRemoveMovie(index)}>Remove</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default TopMoviesTable;
