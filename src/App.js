import React, { useState } from 'react';
import Note from './Note.js';

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleAddNote = () => {
    setNotes([...notes, input]);
    setInput(''); // Clear the input after adding
  };

  return (
    <div className="App">
      <h1>Notes</h1>
      <div>
        <input value={input} onChange={handleInputChange} placeholder="Add a new note..." />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
      <div>
        {notes.map((note, index) => (
          <Note key={index} content={note} />
        ))}
      </div>
    </div>
  );
}

export default App;
