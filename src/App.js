// src/App.js
import React, { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import CreateArea from './components/createarea';
import Note from './components/note';

const App = () => {
    // State to store all the notes in an array
    const [notes, setNotes] = useState([]);

    // Function to add a new note to the notes array
    const addNote = (newNote) => {
        setNotes(prevNotes => {
            // Use spread operator to add the new note while keeping existing ones
            // Assign a unique ID using Date.now() for simplicity
            return [...prevNotes, { ...newNote, id: Date.now() }];
        });
    };

    // Function to delete a note from the notes array by its ID
    const deleteNote = (id) => {
        setNotes(prevNotes => {
            // Filter out the note with the matching ID
            return prevNotes.filter(note => note.id !== id);
        });
    };

    return (
        // `d-flex flex-column min-vh-100` for a sticky footer layout
        <div className="d-flex flex-column min-vh-100">
            <Header />
            {/* `flex-grow-1` makes the main content area fill available space */}
            <main className="flex-grow-1 container my-4">
                {/* Pass the addNote function as a prop to CreateArea */}
                <CreateArea onAdd={addNote} />
                {/* `row justify-content-center` for a centered grid of notes */}
                <div className="row justify-content-center">
                    {/* Map through the notes array and render a Note component for each */}
                    {notes.map(note => (
                        // `key` prop is crucial for React list rendering performance
                        // `col-md-4 col-lg-3 col-sm-6 d-flex` for responsive grid layout
                        // `d-flex` ensures cards in the same row have uniform height
                        <div key={note.id} className="col-md-4 col-lg-3 col-sm-6 d-flex">
                            <Note
                                id={note.id}
                                title={note.title}
                                content={note.content}
                                onDelete={deleteNote} // Pass the deleteNote function as a prop
                            />
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;