import { TaskManager } from "./components/TaskManager"

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Organizador de tareas
          </h1>
          <p className="text-gray-600">
            Organiza tus actividades
          </p>
        </div>
        <TaskManager/>
      </div>
    </div>
      
      
    
  )
}

export default App
