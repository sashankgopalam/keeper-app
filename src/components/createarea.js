// src/components/CreateArea.js
import React, { useState } from 'react';

const CreateArea = ({ onAdd }) => {
    const [note, setNote] = useState({
        title: '',
        content: ''
    });
    const [showAlert, setShowAlert] = useState(false);
    const [isExpanded, setExpanded] = useState(false); // State for expanding the input area

    // Handles changes in the input fields (title and content)
    const handleChange = (event) => {
        const { name, value } = event.target;
        setNote(prevNote => ({
            ...prevNote,
            [name]: value
        }));
        setShowAlert(false); // Hide alert when user starts typing
    };

    // Handles the "Add" button click
    const submitNote = (event) => {
        event.preventDefault(); // Prevent default browser form submission behavior

        // Check if title or content is empty
        if (note.title.trim() === '' || note.content.trim() === '') {
            setShowAlert(true); // Show alert if fields are empty
            return; // Stop the function execution
        }

        onAdd(note); // Call the onAdd prop (from App.js) to add the new note
        setNote({ // Reset the form fields after successful submission
            title: '',
            content: ''
        });
        setShowAlert(false); // Hide alert
        setExpanded(false); // Collapse the input area after submission
    };

    // Expands the input area when the textarea is clicked
    const expand = () => {
        setExpanded(true);
    };

    return (
        <div className="card my-4 mx-auto p-3 shadow-sm" style={{ maxWidth: '600px' }}>
            <form>
                {showAlert && (
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Heads up!</strong> Please enter both title and content to add a note.
                        <button type="button" className="btn-close" onClick={() => setShowAlert(false)} aria-label="Close"></button>
                    </div>
                )}
                <div className="mb-3">
                    {isExpanded && ( // Render title input only when expanded
                        <input
                            name="title"
                            value={note.title}
                            onChange={handleChange}
                            placeholder="Title"
                            className="form-control mb-2"
                        />
                    )}
                    <textarea
                        name="content"
                        value={note.content}
                        onChange={handleChange}
                        onClick={expand} // Expand when textarea is clicked
                        placeholder="Take a note..."
                        rows={isExpanded ? 3 : 1} // Change rows based on expansion
                        className="form-control"
                    ></textarea>
                </div>
                {isExpanded && ( // Render add button only when expanded
                    <div className="d-grid gap-2">
                        <button type="submit" onClick={submitNote} className="btn btn-primary btn-lg">
                            Add Note <i className="bi bi-plus-circle-fill ms-2"></i> {/* Bootstrap Icon */}
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default CreateArea;