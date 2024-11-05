import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProjectForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [phase, setPhase] = useState('todo');
  const [description, setDescription] = useState('');
  const [debtDate, setDebtDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProject = {
      title,
      phase,
      description,
      debtDate,
      endDate,
    };
    onSubmit(newProject);
    setTitle('');
    setPhase('todo');
    setDescription('');
    setDebtDate('');
    setEndDate('');
  };

  return (
    <div className="container">
      <h2>Create New Project</h2>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="form-group">
          <label htmlFor="projectTitle">Project Title</label>
          <input
            type="text"
            id="projectTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectPhase">Project Phase</label>
          <select
            id="projectPhase"
            value={phase}
            onChange={(e) => setPhase(e.target.value)}
            className="form-control"
            required
          >
            <option value="todo">To Do</option>
            <option value="inprogress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="projectDescription">Description</label>
          <textarea
            id="projectDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="debtDate">Debt Date</label>
          <input
            type="date"
            id="debtDate"
            value={debtDate}
            onChange={(e) => setDebtDate(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-sm">
          Create
        </button>
      </form>
    </div>
  );
};

ProjectForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ProjectForm;






