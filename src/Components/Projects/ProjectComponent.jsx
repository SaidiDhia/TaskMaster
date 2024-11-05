import React, { useState } from 'react';
import ProjectList from './ProjectList';
import ProjectForm from './ProjectForm';

function ProjectComponent() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState(false);
  const [completedProjects, setCompletedProjects] = useState([]);

  const onProjectAdd = (project) => {
    let maxId = +new Date();
    project.id = maxId;
    project.edit = false;
    project.completed = false;
    setProjects([project, ...projects]);
    setNewProject(false);
  }

  const onToggleEditProject = (projectId) => {
    const updatedProjects = projects.map((project) => {
      if (project.id === projectId) {
        return { ...project, edit: !project.edit };
      }
      return project;
    });
    setProjects(updatedProjects);
  }

  const onUpdateProject = (id, updatedProject) => {
    const updatedProjects = projects.map((project) => {
      if (project.id === id) {
        return { ...project, ...updatedProject, edit: !project.edit };
      }
      return project;
    });
    setProjects(updatedProjects);
  }

  const onDeleteProject = (id, title) => {
    if (window.confirm(`Are you sure you want to delete ${title}?`)) {
      const updatedProjects = projects.filter((project) => project.id !== id);
      setProjects(updatedProjects);
    }
  }

  const onProjectMarkCompleted = (projectId) => {
    // Find the project to mark as completed
    const projectToMarkCompleted = projects.find((project) => project.id === projectId);
  
    if (projectToMarkCompleted) {
      // Update the phase of the completed project and set completed to true
      const updatedProject = { ...projectToMarkCompleted, completed: true, phase: 'completed' };
  
      // Move the completed project to the completedProjects state
      setCompletedProjects((prevCompletedProjects) => [...prevCompletedProjects, updatedProject]);
  
      // Update the projects array with the completed project
      setProjects((prevProjects) => {
        return prevProjects.map((project) => {
          if (project.id === projectId) {
            return updatedProject;
          }
          return project;
        }).filter((project) => project.id !== projectId);
      });
    }
  };
  
  const onProjectSelected = (projectId) => {
    const project = projects.find((p) => p.id === projectId);
    setNewProject(false);
  }

  const onNewProject = () => {
    setNewProject(true);
  }

  const handleCreateProject = (newProject) => {
    const maxId = projects.reduce((max, project) => (project.id > max ? project.id : max), 0);
    newProject.id = maxId + 1;
    setProjects([...projects, newProject]);
    setNewProject(false);
  };

  return (
    <div className="container">
      <h1 style={{ color: '#3c009d', fontSize: '48px', fontWeight: 700, textDecoration: 'underline' }}>Projects</h1>
      <ProjectList
        projects={projects}
        setProjects={setProjects}
        phase={["todo", "inprogress", "completed"]}
        onEdit={onToggleEditProject}
        onUpdate={onUpdateProject}
        onDelete={onDeleteProject}
        onMarkCompleted={onProjectMarkCompleted}
        onProjectSelected={onProjectSelected}
        onNewProject={onNewProject}
        onCreate={handleCreateProject}
      />
      {newProject && <ProjectForm onProjectAdd={onProjectAdd}  />}
    </div>
  );
}

export default ProjectComponent;
