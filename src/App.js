// Blank app with basic form to add tasks
// Import useState - to hold onto list of tasks

import React, { useState } from 'react';

function App() {
  // State variable for todos list
  const [todos, setTodos] = useState([]);
  // State variable for new todos
  const [newTodo, setNewTodo] = useState("");
  // Stops the default form submission to reload the page
  // Update both state variables accordingly
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };
  return (
    <div>
      {/* Add onSubmit to form to make sure handleSubmit is called */}
      <form onSubmit={handleSubmit}>
        {/* Updates the state varliable newTodo each time the user types and a new task */}
        <input type="text"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      {/* Render the todo list items */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;