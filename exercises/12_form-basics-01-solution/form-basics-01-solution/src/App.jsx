import './App.css';
import { useState } from "react";

export function App() {
    const [notes, setNotes] = useState(["test", "note"]);
    const [inputValue, setInputValue] = useState("");

    const addNote = (note) => {
        setNotes([...notes, note]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(inputValue);
        setInputValue("");
    };

    return (
        <>
            <h1>To-do App</h1>
            <div className="notes-container">
                {notes.map((note, index) => (
                    <p key={index}>{note}</p>
                ))}
            </div>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />

                <input type="submit" value="Add note" />
            </form>
        </>
    )
}