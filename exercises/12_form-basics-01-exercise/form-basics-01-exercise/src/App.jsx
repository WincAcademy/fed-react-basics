import './App.css';
import { useState } from "react";

export function App() {
    const [notes, setNotes] = useState([]);

    const addNote = (note) => {
        setNotes([...notes, note]);
    };

    return (
        <>
            <h1>To-do App</h1>
            <div className="notes-container">
                {notes.map((note, index) => (
                    <p key={index}>{note}</p>
                ))}
            </div>

            <form>
            </form>
        </>
    )
}