import { useTasks } from '../hooks/useTasks';
import { TaskForm } from './TaskForm';
import { TaskList } from './TaskList';
import { TaskStats } from './TaskStats';

export function TaskManager() {
    const {
        tasks,
        editingId,
        editText,
        setEditText,
        addTask,
        toggleComplete,
        deleteTask,
        startEdit,
        saveEdit,
        cancelEdit,
        completedTasks,
        pendingTasks,
        completionPercentage
    } = useTasks();

    const handleEditTextChange = (e) => {
        setEditText(e.target.value);
    };

    return (
        <div className="w-full">
            {/* Formulario para agregar tareas */}
            <TaskForm onAddTask={addTask} />

            {/* Estadísticas y barra de progreso */}
            <TaskStats 
                totalTasks={tasks.length}
                completedTasks={completedTasks}
                pendingTasks={pendingTasks}
                completionPercentage={completionPercentage}
            />

            {/* Lista de tareas */}
            <TaskList
                tasks={tasks}
                editingId={editingId}
                editText={editText}
                onEditTextChange={handleEditTextChange}
                onToggleComplete={toggleComplete}
                onDelete={deleteTask}
                onStartEdit={startEdit}
                onSaveEdit={saveEdit}
                onCancelEdit={cancelEdit}
            />

            {/* Estadísticas finales */}
            {tasks.length > 0 && (
                <TaskStats 
                totalTasks={tasks.length}
                completedTasks={completedTasks}
                pendingTasks={pendingTasks}
                completionPercentage={completionPercentage}
                />
            )}
        </div>
    );
}
