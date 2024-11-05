import React from 'react';

function Task({ title, assignee, dueDate, priority, comments, status }) {
  return (
    <div className="task">
      <h3>{title}</h3>
      <p>Assigned to: {assignee}</p>
      <p>Due Date: {dueDate}</p>
      <p>Priority: {priority}</p>
      <p>Comments: {comments}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default Task;

