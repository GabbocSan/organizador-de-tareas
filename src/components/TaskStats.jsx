export function TaskStats({ totalTasks, completedTasks, pendingTasks, completionPercentage }) {
    if (totalTasks === 0) return null;

    return (
        <>

        {/* Barra de progreso */}
        <div className="text-center mb-6">
            <div className="text-sm text-gray-700">
                {completedTasks} de {totalTasks} tareas completadas
                <div className="w-full max-w-lg mx-auto bg-gray-200 rounded-full h-3 mt-2">
                    <div 
                    className="bg-green-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${completionPercentage}%` }}
                    >
                    </div>
                </div>
            </div>
        </div>

        {/* Estadísticas al final */}
        <div className="mt-8 w-full">
            <div className="flex justify-center gap-6 text-sm text-gray-600 bg-white rounded-lg p-4 shadow-md max-w-2xl mx-auto">
                <span className="flex items-center gap-1">
                    <span className="text-blue-500">📋</span> 
                    Total: <strong>{totalTasks}</strong>
                </span>
                <span className="flex items-center gap-1">
                    <span className="text-yellow-500">⏳</span> 
                    Pendientes: <strong>{pendingTasks}</strong>
                </span>
                <span className="flex items-center gap-1">
                    <span className="text-green-500">✅</span> 
                    Completadas: <strong>{completedTasks}</strong>
                </span>
            </div>
        </div>

        </>
    );
}
