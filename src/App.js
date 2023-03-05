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
  // Add functionality to mark todo items as completed
  // Add a checkbox to each list item - updating the completed property in the object once the checkbox is checked
  const handleToggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };
  // Add functionality to delete list items
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="container">
      {/* Add onSubmit to form to make sure handleSubmit is called */}
      <form onSubmit={handleSubmit}>
        {/* Updates the state varliable newTodo each time the user types and a new task */}
        <input type="text"
        className="todo-input"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button className="add-todo" type="submit">Add Todo</button>
      </form>
      {/* Render the todo list items using map - items stored in todos state variable */}
      {/* Add functionality to mark todo items as completed */}
      {/* Add a checkbox to each list item - updating the completed property in the object once the checkbox is checked */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {/* Checkbox to represent completed state of item */}
            <input
              type="checkbox"
              // Checked attribute of checkbox is set to completed 
              checked={todo.completed}
              // When checkbox is clicked it trigegrs the event handler to show completed item from state
              onChange={() => handleToggleCompleted(todo.id)}
            />
            {/* Styling for completed items */}
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.text}
            </span>
            {/* Renders a delete button w/each list item that renders */}
            <button className="delete-todo" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;