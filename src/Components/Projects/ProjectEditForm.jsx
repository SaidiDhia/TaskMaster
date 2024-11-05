import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ProjectEditForm = ({ project, onEditProject, onCancelEdit }) => {
  const [editedProject, setEditedProject] = useState(project);

  const handleChange = (event) => {
    setEditedProject({ ...editedProject, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedProject = { ...project, ...editedProject };
    onEditProject(updatedProject);
    onCancelEdit();
  };

  return (
    <Modal show={true} onHide={onCancelEdit} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={editedProject.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phase">Phase:</label>
            <select
              className="form-control"
              id="phase"
              name="phase"
              value={editedProject.phase}
              onChange={handleChange}
              required
            >
              <option value="todo">To Do</option>
              <option value="inprogress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={editedProject.description || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="debtDate">Debt Date:</label>
            <input
              type="date"
              className="form-control"
              id="debtDate"
              name="debtDate"
              value={editedProject.debtDate || ''}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date:</label>
            <input
              type="date"
              className="form-control"
              id="endDate"
              name="endDate"
              value={editedProject.endDate || ''}
              onChange={handleChange}
            />
          </div>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectEditForm;





