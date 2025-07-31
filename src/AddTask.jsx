import { useState } from "react";
import { Plus, Check, X, Edit2, Save } from 'lucide-react';

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
        <div className="w-full"> {/* Contenedor principal que ocupe todo el ancho */}
          {/* Formulario centrado pero con ancho fijo */}
          <div className="w-full max-w-3xl mx-auto mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={newTaskText}
                  onChange={(e) => setNewTaskText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addTask()}
                  placeholder="Escribe una nueva tarea..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                />
                <button 
                  onClick={addTask}
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center gap-2 font-medium whitespace-nowrap"
                >
                  <Plus size={20} />
                  Agregar
                </button>
              </div>
            </div>
          </div>

          {/* Lista de tareas que ocupe todo el ancho disponible */}
          {tasks.length === 0 ? (
            <div className="w-full"> {/* Asegurar que ocupe todo el ancho */}
              <div className="text-center py-20 bg-white rounded-xl shadow-lg mx-auto max-w-2xl">
                <div className="text-6xl mb-4">📝</div>
                <p className="text-gray-500 text-lg">No hay tareas aún</p>
                <p className="text-gray-400">¡Agrega tu primera tarea para comenzar!</p>
              </div>
            </div>
          ) : (
            <div className="w-full">
              {/* Estadísticas centradas */}
              <div className="text-center mb-6">
                <div className="text-sm text-gray-700">
                  {tasks.filter(task => task.completed).length} de {tasks.length} tareas completadas
                  <div className="w-full max-w-lg mx-auto bg-gray-200 rounded-full h-3 mt-2">
                    <div 
                      className="bg-green-500 h-3 rounded-full transition-all duration-300"
                      style={{ 
                        width: `${tasks.length > 0 ? (tasks.filter(task => task.completed).length / tasks.length) * 100 : 0}%` 
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Grid que ocupe todo el ancho disponible */}
              <div className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 transform hover:scale-105 ${
                      task.completed ? 'bg-green-50 border-l-4 border-green-500' : 'border-l-4 border-blue-500'
                    }`}
                  >
                    {/* Botones de acción */}
                    <div className="flex items-start justify-between mb-3">
                      <button
                        onClick={() => toggleComplete(task.id)}
                        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                          task.completed
                            ? 'bg-green-500 border-green-500 text-white'
                            : 'border-gray-300 hover:border-green-500'
                        }`}
                      >
                        {task.completed && <Check size={14} />}
                      </button>
                      <div className="flex gap-2 ml-2">
                        <button
                          onClick={() => startEdit(task.id, task.text)}
                          className="text-gray-500 hover:text-blue-500 transition-colors duration-200"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => deleteTask(task.id)}
                          className="text-gray-500 hover:text-red-500 transition-colors duration-200"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Contenido de la tarea */}
                    {editingId === task.id ? (
                      <div className="space-y-3">
                        <textarea
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-900"
                          rows="3"
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={() => saveEdit(task.id)}
                            className="flex-1 px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200 flex items-center justify-center gap-1 text-sm"
                          >
                            <Save size={14} />
                            Guardar
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="flex-1 px-3 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors duration-200 text-sm"
                          >
                            Cancelar
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <p className={`text-gray-800 mb-3 leading-relaxed break-words ${
                          task.completed ? 'line-through text-gray-500' : ''
                        }`}>
                          {task.text}
                        </p>
                        <div className="text-xs text-gray-400">
                          Creada: {task.createdAt}
                        </div>
                      </>
                    )}

                    {/* Badge de estado */}
                    <div className="mt-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        task.completed
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {task.completed ? '✅ Completada' : '⏳ Pendiente'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer con estadísticas */}
              <div className="mt-8 w-full">
                <div className="flex justify-center gap-6 text-sm text-gray-600 bg-white rounded-lg p-4 shadow-md max-w-2xl mx-auto">
                  <span className="flex items-center gap-1">
                    <span className="text-blue-500">📋</span> 
                    Total: <strong>{tasks.length}</strong>
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-yellow-500">⏳</span> 
                    Pendientes: <strong>{tasks.length - tasks.filter(task => task.completed).length}</strong>
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-green-500">✅</span> 
                    Completadas: <strong>{tasks.filter(task => task.completed).length}</strong>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

    )
}