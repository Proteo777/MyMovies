import React, { useState } from 'react';

function AddMovieForm({ onAddMovie }) {
    const [newMovieID, setNewMovieID] = useState('');
    const [newMovieTitle, setNewMovieTitle] = useState('');
    const [newMovieYear, setNewMovieYear] = useState('');
    const [newMovieDirector, setNewMovieDirector] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleAddMovie = () => {
        if (
            /^\d+$/.test(newMovieID) &&
            /^\d+$/.test(newMovieYear) &&
            /^[a-zA-Z\s]+$/.test(newMovieDirector)
        ) {
            const movieData = {
                id: newMovieID,
                title: newMovieTitle,
                year: newMovieYear,
                director: newMovieDirector
            };

            fetch('http://localhost:3000/movies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(movieData),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    onAddMovie(movieData);
                    setNewMovieID('');
                    setNewMovieTitle('');
                    setNewMovieYear('');
                    setNewMovieDirector('');
                    setErrorMessage('');
                })
                .catch(error => {
                    console.error('Error adding movie:', error);
                });
        } else {
            setErrorMessage('Incorrect data. Please try again.');
            // Wyświetlenie komunikatu o błędzie w formie wyskakującego okna
            window.alert('Incorrect data. Please try again.');
        }
    };

    return (
        <div className="inputContainer">
            <input
                type="text"
                placeholder="ID"
                value={newMovieID}
                onChange={(e) => setNewMovieID(e.target.value)}
            />
            <input
                type="text"
                placeholder="Title"
                value={newMovieTitle}
                onChange={(e) => setNewMovieTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Year"
                value={newMovieYear}
                onChange={(e) => setNewMovieYear(e.target.value)}
            />
            <input
                type="text"
                placeholder="Director"
                value={newMovieDirector}
                onChange={(e) => setNewMovieDirector(e.target.value)}
            />
            <button onClick={handleAddMovie}>Add Movie</button>
        </div>
    );
}

export default AddMovieForm;
