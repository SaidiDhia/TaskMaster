import React, { useState } from 'react'; // Import useState

function AddTaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const [comments, setComments] = useState("");
  const [status, setStatus] = useState("To Do"); // Set default status
  const [showForm, setShowForm] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({ title, assignee, dueDate, priority, comments, status });
    setTitle("");
    setAssignee("");
    setDueDate("");
    setPriority("");
    setComments("");
  };
  const toggleForm = () => {
    setShowForm(!showForm); // Toggle form visibility state
  };

  return ( 
    <div className="card border-primary mb-3"> {/* Card with blue border */}
    <div className="card-header">
      <h5 className="card-title">Add Task</h5>
      <button type="button" className="btn btn-primary btn-sm" onClick={toggleForm}>
        {showForm ? 'Close' : 'Add Task'}
      </button>
    </div>
    <div className={showForm ? 'card-body collapse show' : 'card-body collapse'}> {/* Toggle collapse class */}
      <form onSubmit={handleSubmit}>
        <div className="row mb-3"> {/* Form row for Title */}
          <label htmlFor="title" className="col-sm-2 col-form-label">Title:</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="Enter task title" />
          </div>
        </div>
        <div className="row mb-3"> {/* Form row for Assignee */}
          <label htmlFor="assignee" className="col-sm-2 col-form-label">Assignee:</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="assignee" value={assignee} onChange={(e) => setAssignee(e.target.value)} placeholder="Assign to someone" />
          </div>
        </div>
        <div className="row mb-3"> {/* Form row for Due Date */}
          <label htmlFor="dueDate" className="col-sm-2 col-form-label">Due Date:</label>
          <div className="col-sm-10">
            <input type="date" className="form-control" id="dueDate" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          </div>
        </div>
        <div className="row mb-3"> {/* Form row for Priority */}
          <label htmlFor="priority" className="col-sm-2 col-form-label">Priority:</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="priority" value={priority} onChange={(e) => setPriority(e.target.value)} placeholder="High, Medium, Low" />
          </div>
        </div>
        <div className="row mb-3"> {/* Form row for Comments */}
          <label htmlFor="comments" className="col-sm-2 col-form-label">Comments:</label>
          <div className="col-sm-10">
            <textarea className="form-control" id="comments" value={comments} onChange={(e) => setComments(e.target.value)} placeholder="Add any comments" />
          </div>
        </div>
        <div className="row mb-3"> {/* Form row for Status */}
          <label htmlFor="status" className="col-sm-2 col-form-label">Status:</label>
          <div className="col-sm-10">
            <select value={status} onChange={(e) => setStatus(e.target.value)} className="form-select">
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>

            </div>
            </div>
            <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
    </div>
    </div>
    
  );
}

export default AddTaskForm;
