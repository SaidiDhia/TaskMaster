import React, { useState, useEffect } from 'react';

function TaskEditForm({ task, onModifyTask, onClose }) {
  const [formData, setFormData] = useState({}); // State to hold form data

  useEffect(() => {
    // Set initial form data when task changes
    setFormData(task);
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onModifyTask(formData);
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="modal fade show" id={`editTask-${task.id}`} tabIndex="-1" aria-labelledby="editTaskLabel" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editTaskLabel">Edit Task</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title:</label>
                <input type="text" className="form-control" id="title" name="title" value={formData.title || ''} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="assignee" className="form-label">Assignee:</label>
                <input type="text" className="form-control" id="assignee" name="assignee" value={formData.assignee || ''} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="dueDate" className="form-label">Due Date:</label>
                <input type="date" className="form-control" id="dueDate" name="dueDate" value={formData.dueDate || ''} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="priority" className="form-label">Priority:</label>
                <input type="text" className="form-control" id="priority" name="priority" value={formData.priority || ''} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="comments" className="form-label">Comments:</label>
                <textarea className="form-control" id="comments" name="comments" value={formData.comments || ''} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="status" className="form-label">Status:</label>
                <select className="form-select" id="status" name="status" value={formData.status || ''} onChange={handleChange}>
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Save Changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskEditForm;