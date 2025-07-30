import { useState } from "react";

export function AddTask () {
    
    const [tasks, setTasks] = useState([]);
    const [newTaskText, setNewTaskText] = useState('');

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
    }

    const toggleComplete = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return(
        <>
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
                <button onClick={() => toggleComplete(task.id)}>
                    {task.completed ? '✅' : '⭕'}
                </button>
                <p>{task.text}</p>
                <button onClick={() => deleteTask(task.id)}>
                    ❌ Eliminar
                </button>
                <p>Creada: {task.createdAt}</p>
            </div>
          ))}
        </div>
        </>
    )
}