import { TaskItem } from './TaskItem';

export function TaskList({ 
  tasks, 
  editingId, 
  editText, 
  onEditTextChange,
  onToggleComplete, 
  onDelete, 
  onStartEdit, 
  onSaveEdit, 
  onCancelEdit 
}) {
    if (tasks.length === 0) {
        return (
        <div className="w-full">
            <div className="text-center py-20 bg-white rounded-xl shadow-lg mx-auto max-w-2xl">
                <div className="text-6xl mb-4">📝</div>
                <p className="text-gray-500 text-lg">No hay tareas aún</p>
                <p className="text-gray-400">¡Agrega tu primera tarea para comenzar!</p>
            </div>
        </div>
        );
    }

    return (
        <div className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {tasks.map((task) => (
            <TaskItem
            key={task.id}
            task={task}
            isEditing={editingId === task.id}
            editText={editText}
            onEditTextChange={onEditTextChange}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
            onStartEdit={onStartEdit}
            onSaveEdit={onSaveEdit}
            onCancelEdit={onCancelEdit}
            />
        ))}
        </div>
    );
}
