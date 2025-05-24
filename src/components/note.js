// src/components/Note.js
import React from 'react';

const Note = ({ id, title, content, onDelete }) => {
    // Handles the "Delete" button click
    const handleClick = () => {
        onDelete(id); // Call the onDelete prop (from App.js) and pass the note's ID
    };

    return (
        // `w-100` makes the card take full width of its column
        // `note-card` is a custom class you can define for specific styling if needed
        <div className="card m-2 p-3 shadow-sm w-100 note-card">
            <h5 className="card-title text-break">{title}</h5> {/* text-break helps with long titles */}
            <p className="card-text text-break">{content}</p> {/* text-break helps with long content */}
            <div className="d-flex justify-content-end mt-2">
                <button onClick={handleClick} className="btn btn-sm btn-outline-danger">
                    <i className="bi bi-trash-fill me-1"></i> Delete {/* Bootstrap Icon */}
                </button>
            </div>
        </div>
    );
};

export default Note;