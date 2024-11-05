import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigationbar.css'; // Import the CSS file
import homeIcon from './icons/home.png';
import documentIcon from './icons/document.png';
import teamIcon from './icons/team.png';
import loginIcon from './icons/login.png';
import taskIcon from './icons/task.png'; // Add import for tasks icon
import projectIcon from './icons/project.png';
import aboutIcon from './icons/about.png';

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <h1 className="navbar-brand" style={{ color: '#6a0dad', fontSize: '54px', fontWeight: 700, textDecoration: 'underline', fontStyle: "bold", fontStyle: "italic" }}>
              <img src={taskIcon} alt="Tasks" style={{ width: '40px', marginRight: '20px', filter: 'invert(47%) sepia(69%) saturate(5615%) hue-rotate(259deg) brightness(98%) contrast(96%)' }} />TaskMaster
            </h1>
          </div>
          <div className="col">
            <div className="navbar-nav">
              <ul className="navbar-nav">
                <li>
                  <NavLink className="nav-link btn btn-primary" activeClassName="active" exact to="/" data-text="Home">
                    <img src={homeIcon} alt="Home" style={{ width: '20px', marginBottom: '20px' }} title="Home" />
                    <span className="label">Home</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link btn btn-primary" activeClassName="active" exact to="/Components/DocumentAdd/DocumentManager" data-text="Documents">
                    <img src={documentIcon} alt="Documents" style={{ width: '20px', marginBottom: '20px' }} title="Documents" />
                    <span className="label">Documents</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link btn btn-primary" activeClassName="active" exact to="/Components/TeamAdd/TeamForm" data-text="Team Form">
                    <img src={teamIcon} alt="Team Form" style={{ width: '20px', marginBottom: '20px' }} title="Team Form" />
                    <span className="label">Team Form</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link btn btn-primary" activeClassName="active" exact to='/Components/Task/TaskComponent' data-text="Tasks">
                    <img src={taskIcon} alt="Tasks" style={{ width: '20px', marginBottom: '20px' }} title="Tasks" />
                    <span className="label">Tasks</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link btn btn-primary" activeClassName="active" exact to='/Components/Projects/ProjectComponent' data-text="Projects">
                    <img src={projectIcon} alt="Projects" style={{ width: '20px', marginBottom: '20px' }} title="Projects" />
                    <span className="label">Projects</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link btn btn-primary" activeClassName="active" exact to="/Components/LoginSignup/LoginSignup" data-text="Login/Signup">
                    <img src={loginIcon} alt="Login/Signup" style={{ width: '20px', marginBottom: '20px' }} title="Login/Signup" />
                    <span className="label">Login/Signup</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link btn btn-primary" activeClassName="active" exact to='/Components/NavigationBar/AboutPage' data-text="About">
                    <img src={aboutIcon} alt="About" style={{ width: '20px', marginBottom: '20px' }} title="About" />
                    <span className="label">About</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;