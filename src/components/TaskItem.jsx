import { Check, Edit2, X, Save } from 'lucide-react';

export function TaskItem({ 
    task, 
    isEditing, 
    editText, 
    onEditTextChange,
    onToggleComplete, 
    onDelete, 
    onStartEdit, 
    onSaveEdit, 
    onCancelEdit 
}) {
    return (
        <div
            className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 transform hover:scale-105 ${
            task.completed ? 'bg-green-50 border-l-4 border-green-500' : 'border-l-4 border-blue-500'
            }`}
        >
            {/* Botones de acción */}
            <div className="flex items-start justify-between mb-3">
                <button
                    onClick={() => onToggleComplete(task.id)}
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
                        onClick={() => onStartEdit(task.id, task.text)}
                        className="text-gray-500 hover:text-blue-500 transition-colors duration-200"
                    >
                        <Edit2 size={16} />
                    </button>
                    <button
                        onClick={() => onDelete(task.id)}
                        className="text-gray-500 hover:text-red-500 transition-colors duration-200"
                    >
                        <X size={16} />
                    </button>
                </div>
            </div>

            {/* Contenido de la tarea */}
            {isEditing ? (
                <div className="space-y-3">
                    <textarea
                        value={editText}
                        onChange={onEditTextChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-900"
                        rows="3"
                    />
                <div className="flex gap-2">
                    <button
                        onClick={() => onSaveEdit(task.id)}
                        className="flex-1 px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200 flex items-center justify-center gap-1 text-sm"
                    >
                        <Save size={14} />
                        Guardar
                    </button>
                    <button
                        onClick={onCancelEdit}
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
    );
}
