import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState([]);

  // ✅ GET all todos
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/todo")
      .then((res) => setTodo(res.data));
  }, []);

  // ✅ CREATE todo
  const createTodo = () => {
    if (!title) return alert("add todo");

    axios
      .post("http://localhost:5000/api/todo", { title })
      .then((res) => setTodo([...todo, res.data]));

    setTitle("");
  };

  // ✅ DELETE todo
  const deletTodo = (id) => {
    axios.delete(`http://localhost:5000/api/todo/${id}`).then(() => {
      setTodo(todo.filter((t) => t.id !== id));
    });
  };

  // ✅ UPDATE todo
  const updateTodo = (id) => {
  const newTitle = prompt("Edit todo");
  if (!newTitle) return;

  axios
    .put(`http://localhost:5000/api/todo/${id}`, { title: newTitle })
    .then((res) => {
      setTodo(todo.map(t => t.id === id ? res.data : t));
    });
};


  return (
    <div>
      <h1>List of Todos</h1>

      <input
        placeholder="add-todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={createTodo}>Add Todo</button>

      <ul>
        {todo.map((t) => (
          <li key={t.id}>
            {t.title}
            <button onClick={() => deletTodo(t.id)}>Delete</button>
            <button onClick={() => updateTodo(t.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
