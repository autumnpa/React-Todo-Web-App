// Blank app with basic form to add tasks
// Import useState - to hold onto list of tasks

import React, { useState } from 'react';

function App() {
  // State variable for todos list
  const [todos, setTodos] = useState([]);
  // State variable for new todos
  const [newTodo, setNewTodo] = useState("");
  return (
    <div>
      <form>
        {/* Updates the state varliable newTodo each time the user types and a new task */}
        <input type="text"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default App;