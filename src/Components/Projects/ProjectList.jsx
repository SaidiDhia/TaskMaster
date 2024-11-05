import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProjectEditForm from './ProjectEditForm';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ProjectList = ({ projects, setProjects, onCreate, onDelete, onMarkCompleted }) => {
  const [newProject, setNewProject] = useState({ title: '', phase: 'todo', description: '', debtDate: '', endDate: '' });
  const [editProjectId, setEditProjectId] = useState(null);
  const [completedProjects, setCompletedProjects] = useState([]);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCreate = (e) => {
    e.preventDefault();
    onCreate({ ...newProject, id: Date.now() });
    setNewProject({ title: '', phase: 'todo', description: '', debtDate: '', endDate: '' });
  };

  const handleEdit = (projectId) => {
    setEditProjectId(projectId);
  };

  const handleDelete = (projectId) => {
    onDelete(projectId);
  };

  const handleMarkCompleted = (projectId) => {
    const completedProject = projects.find(project => project.id === projectId);
  
    if (completedProject) {
      const updatedCompletedProject = {
        ...completedProject,
        completed: true,
        phase: 'completed'
      };
      setCompletedProjects([...completedProjects, updatedCompletedProject]);
  
      const updatedProjects = projects.filter(project => project.id !== projectId);
      setProjects(updatedProjects);
    }
  };
  
  const onUpdateProject = (editedProject) => {
    const updatedProjects = projects.map((project) => {
      if (project.id === editedProject.id) {
        return editedProject;
      }
      return project;
    });
    setProjects(updatedProjects);
  };

  

  const handleCloseDetailsModal = () => {
    setShowDetailsModal(false);
  };
  
  return (
    
    <div className="container">
      <div className="row">
      <div className="col-md-6">
          <h2>Create New Project</h2>
          <form onSubmit={handleCreate} className="mb-3">
            <div className="form-group">
              <label htmlFor="projectTitle">Title:</label>
              <input
                type="text"
                id="projectTitle"
                value={newProject.title}
                onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="projectPhase">Phase:</label>
              <select
                id="projectPhase"
                value={newProject.phase}
                onChange={(e) => setNewProject({ ...newProject, phase: e.target.value })}
                className="form-control"
                required
              >
                <option value="todo">To Do</option>
                <option value="inprogress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="projectDescription">Description:</label>
              <textarea
                id="projectDescription"
                value={newProject.description}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="debtDate">Debt Date:</label>
              <input
                type="date"
                id="debtDate"
                value={newProject.debtDate}
                onChange={(e) => setNewProject({ ...newProject, debtDate: e.target.value })}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="endDate">End Date:</label>
              <input
                type="date"
                id="endDate"
                value={newProject.endDate}
                onChange={(e) => setNewProject({ ...newProject, endDate: e.target.value })}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">Create Project</button>
          </form>
        </div>
      
        <div className="col-md-12">
          <h2>Projects</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Phase</th>
                <th>Description</th>
                <th>Debt Date</th>
                <th>End Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id}>
                  <td>{project.title}</td>
                  <td>{project.phase}</td>
                  <td>{project.description}</td>
                  <td>{project.debtDate}</td>
                  <td>{project.endDate}</td>
                  <td>
                    <button className="btn btn-primary btn-sm" onClick={() => handleEdit(project.id)}>Edit</button>
                    <button className="btn btn-danger btn-sm ml-2" onClick={() => handleDelete(project.id)}>Delete</button>
                    {!project.completed && (
                      <button className="btn btn-success btn-sm ml-2" onClick={() => handleMarkCompleted(project.id)}>Mark Completed</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
   
      <Modal show={showDetailsModal} onHide={handleCloseDetailsModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Phase: {selectedProject?.phase}</p>
          <p>Description: {selectedProject?.description}</p>
          <p>Debt Date: {selectedProject?.debtDate}</p>
          <p>End Date: {selectedProject?.endDate}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDetailsModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="row mt-4">
        <div className="col-md-12">
          <h2>Completed Projects</h2>
          <ul className="list-group">
            {completedProjects.map((project) => (
              <li key={project.id} className="list-group-item">
                {project.title} - {project.phase}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {editProjectId && (
        <div className="modal-container">
          <ProjectEditForm
            project={projects.find((project) => project.id === editProjectId)}
            onEditProject={onUpdateProject}
            onCancelEdit={() => setEditProjectId(null)}
            centered
          />
        </div>
      )}
    </div>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      phase: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      debtDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setProjects: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onMarkCompleted: PropTypes.func.isRequired
};

export default ProjectList;



            







