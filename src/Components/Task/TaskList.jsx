import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function TaskList({ tasks, onDeleteTask, onModifyTask, selectedTask, onSetSelectedTask }) {
    const handleDelete = (id) => {
        onDeleteTask(id); // Pass the id of the task to be deleted
      };
      

  const handleEdit = (task) => {
    console.log('Editing task:', task);
    onSetSelectedTask(task);
  };

  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Title</th>
          <th>Assignee</th>
          <th>Due Date</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.assignee}</td>
            <td>{task.dueDate}</td>
            <td>{task.priority}</td>
            <td>
              <button
                className={`btn btn-sm ${
                  task.status === 'Done' ? 'btn-success' : task.status === 'In Progress' ? 'btn-primary' : 'btn-danger'
                }`}
              >
                {task.status}
              </button>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(task.id)}>
                  Delete
                </button>
                <button className="btn btn-sm btn-warning" onClick={() => handleEdit(task)}>Edit</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TaskList;