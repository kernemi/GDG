import React, { useState } from 'react';
import './index.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const increment = () => {
    setCount(count + 1);
    setMessage('');
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setMessage("Count can't go below 0!");
    }
  };

  const reset = () => {
    setCount(0);
    setMessage('Counter reset!');
  };

  const [note, addNote] = useState('');
  const [title, addTitle] = useState('title');

  function handleForm(e) {
    e.preventDefault();
    addTitle(note);
    addNote('');
  }

  function deleteTitle() {
    addTitle('');
  }

  return (
    <>
      {/* Counter section */}
      <div className="container">
        <h1>React Counter</h1>
        <p className="msg">{message}</p>
        <p className="value">Count: {count}</p>
        <div className="button-group">
          <button className="btn" onClick={increment}>+</button>
          <button className="btn" onClick={decrement}>-</button>
          <button className="btn reset-btn" onClick={reset}>Reset</button>
        </div>
      </div>

      {/* Note section */}
      <div className="myNote">{title}</div>
      <button onClick={deleteTitle}>Delete</button>

      <form onSubmit={handleForm}>
        <input
          type="text"
          value={note}
          placeholder={note}
          onChange={(e) => addNote(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
