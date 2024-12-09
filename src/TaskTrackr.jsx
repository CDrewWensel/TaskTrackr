import { useState } from 'react';

export default function TaskTrackr() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="p-2 border rounded"
        placeholder="Add a new task"
      />
      <button onClick={addTask} className="ml-2 p-2 bg-green-500 text-white rounded">
        Add
      </button>
      <ul className="mt-4">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center p-2 border-b">
            {task}
            <button onClick={() => removeTask(index)} className="ml-2 p-1 bg-red-500 text-white rounded">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}