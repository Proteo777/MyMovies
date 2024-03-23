import React, { useState } from 'react';

function AddMovieForm({ onAddMovie }) {
    const [newMovieID, setNewMovieID] = useState('');
    const [newMovieTitle, setNewMovieTitle] = useState('');
    const [newMovieYear, setNewMovieYear] = useState('');
    const [newMovieDirector, setNewMovieDirector] = useState('');

    const handleAddMovie = () => {
        if (newMovieID.trim() !== '' && newMovieTitle.trim() !== '' && newMovieYear.trim() !== '' && newMovieDirector.trim() !== '') {
            onAddMovie({ id: newMovieID, title: newMovieTitle, year: newMovieYear, director: newMovieDirector });
            setNewMovieID('');
            setNewMovieTitle('');
            setNewMovieYear('');
            setNewMovieDirector('');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="ID"
                value={newMovieID}
                onChange={(e) => setNewMovieID(e.target.value)}
            />
            <input
                type="text"
                placeholder="Tytuł"
                value={newMovieTitle}
                onChange={(e) => setNewMovieTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Rok"
                value={newMovieYear}
                onChange={(e) => setNewMovieYear(e.target.value)}
            />
            <input
                type="text"
                placeholder="Reżyser"
                value={newMovieDirector}
                onChange={(e) => setNewMovieDirector(e.target.value)}
            />
            <button onClick={handleAddMovie}>Add Movie</button>
        </div>
    );
}

export default AddMovieForm;
