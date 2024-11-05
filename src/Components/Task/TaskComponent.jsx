import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import TaskEditForm from './TaskEditForm';
import { v4 as uuidv4 } from 'uuid';

function TaskComponent() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState();

  const addTask = (task) => {
    task.id = uuidv4();
    setTasks([...tasks, task]);
  };;

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleModifyTask = (editedTask) => {
    const updatedTasks = tasks.map((task) => (task.id === editedTask.id ? editedTask : task));
    setTasks(updatedTasks);
  };

  const handleCloseEditForm = () => {
    setSelectedTask(null); // Close the edit form without modifying the task
  };

  return (
    <div className="container">
      <h1 style={{ color: '#3c009d', fontSize: '48px', fontWeight: 700, textDecoration: 'underline' }}>Tasks</h1>
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onModifyTask={handleModifyTask}
        selectedTask={selectedTask}
        onSetSelectedTask={setSelectedTask}
      />
      <AddTaskForm className="card border-primary" onAddTask={addTask} />
      {selectedTask && <TaskEditForm task={selectedTask} onModifyTask={handleModifyTask} onSetSelectedTask={setSelectedTask} onClose={handleCloseEditForm} />}
    </div>
  );
}

export default TaskComponent;
