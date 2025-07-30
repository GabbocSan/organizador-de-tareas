import { useState } from "react";

export function AddTask () {
    
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
    }

    const toggleComplete = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const startEdit = (id, text) => {
        setEditingId(id);
        setEditText(text);
    };

    const saveEdit = (id) => {
        if (editText.trim()) {
            setTasks(tasks.map(task => 
                task.id === id ? { ...task, text: editText.trim() } : task
            ));
        }
        setEditingId(null);
        setEditText('');
    };

    const cancelEdit = () => {
        setEditingId(null);
        setEditText('');
    };

    return(
        <>
        <div>
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
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

                {editingId === task.id ? (
                    <div>
                        <input
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                        />
                        <button onClick={() => saveEdit(task.id)}>Guardar</button>
                        <button onClick={cancelEdit}>Cancelar</button>
                    </div>
                ):(
                    <div>
                        <p style={{ 
                            textDecoration: task.completed ? 'line-through' : 'none',
                            color: task.completed ? 'gray' : 'black'
                        }}>
                            {task.text}
                        </p>
                        <button onClick={() => startEdit(task.id, task.text)}>
                            ✏️ Editar
                        </button>
                        <button onClick={() => deleteTask(task.id)}>
                            ❌ Eliminar
                        </button>
                    </div>
                )}
                <p>Creada: {task.createdAt}</p>
            </div>
          ))}
        </div>
        </>
    )
}