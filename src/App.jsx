import { useState } from "react";
import React from "react";

function App() {

  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const addTask = () => {
  if (newTaskText.trim()) {
    const newTask = {
      id: Date.now(), // ID único basado en timestamp
      text: newTaskText.trim(),
      completed: false,
      createdAt: new Date().toLocaleDateString()
    };
    setTasks([...tasks, newTask]);
    setNewTaskText('');
  }
};

  return (
    <>
      <div>
        <h1>Organizador de tareas</h1>
        <div>
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="Escribe una nueva tarea..."
          />
          <button onClick={addTask}>
            Agregar
          </button>
        </div>
        <div>
          {tasks.map((task) => (
            <div key={task.id}>
              <p>{task.text}</p>
              <p>Creada: {task.createdAt}</p>
            </div>
          ))}
        </div>
      </div>
      
    </>
  )
}

export default App
