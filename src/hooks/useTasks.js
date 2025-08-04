import { useState } from "react";

export function useTasks(){
    const [tasks, setTasks] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');

    const addTask = (text) => {
        if (text.trim()) {
        const newTask = {
            id: Date.now(),
            text: text.trim(),
            completed: false,
            createdAt: new Date().toLocaleDateString()
        };
        setTasks([...tasks, newTask]);
        }
    };

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

    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = tasks.length - completedTasks;
    const completionPercentage = tasks.length > 0 ? (completedTasks / tasks.length) * 100 : 0;

    return {
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
    };

}