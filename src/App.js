// Blank app with basic form to add tasks
// Import useState - to hold onto list of tasks
// (Optional Challenge): Refactor your code to use useEffect to log all the current To Dos whenever they are updated.
// (Optional Challenge): Refactor your code to have an external Todo component in its own file Todo.js.

import React, { useState, useEffect } from 'react';

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

  // Refactor your code to use useEffect to log all the current To Dos whenever they are updated.
  //   useEffect(() => {
  //    argument here - update something;
  //   }, second argument here - dependancies);
  // Update current state of tasks everytime a new one is added (console.log)
  // Use dependancy array - tasks will change so the effect needs to be re-run when values update
  // My array is todos so that is what needs to be in the useEffect to updates each value when added

  useEffect(() => {
    console.log([todos])
  }, [todos]);


  return (
    <div className="container">
      {/* Add onSubmit to form to make sure handleSubmit is called */}
      <form className="" onSubmit={handleSubmit}>
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
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo">
            {/* Checkbox to represent completed state of item */}
            <input
              type="checkbox"
              // Checked attribute of checkbox is set to completed 
              checked={todo.completed}
              // When checkbox is clicked it trigegrs the event handler to show completed item from state
              onChange={() => handleToggleCompleted(todo.id)}
            />
            {/* Styling for completed items */}
            <span className="todo-text" style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
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