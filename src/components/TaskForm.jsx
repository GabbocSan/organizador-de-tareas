import { useState } from 'react';
import { Plus } from 'lucide-react';

export function TaskForm({ onAddTask }) {
    const [newTaskText, setNewTaskText] = useState('');

    const handleSubmit = () => {
        onAddTask(newTaskText);
        setNewTaskText('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
        handleSubmit();
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex gap-3">
                    <input
                        type="text"
                        value={newTaskText}
                        onChange={(e) => setNewTaskText(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Escribe una nueva tarea..."
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                    />
                    <button 
                        onClick={handleSubmit}
                        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center gap-2 font-medium whitespace-nowrap"
                    >
                        <Plus size={20} />
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    );
}