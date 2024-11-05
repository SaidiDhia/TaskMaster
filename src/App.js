import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DocumentManager from './Components/DocumentAdd/DocumentManager';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import TeamForm from './Components/TeamAdd/TeamForm';
import Navigationbar from './Components/NavigationBar/Navigationbar';
import Home from './Components/NavigationBar/Home';
import AboutPage from './Components/NavigationBar/AboutPage';
import TaskComponent from './Components/Task/TaskComponent';
import ProjectComponent from './Components/Projects/ProjectComponent';
import './App.css';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Navigationbar />
          <div className="content"> {/* Wrap content with a div and apply the content class */}
            <Routes>
              <Route path="/" element={<Home />} /> {/* Add route for Home component */}
              <Route path='/Components/DocumentAdd/DocumentManager' element={<DocumentManager />} />
              <Route path='/Components/LoginSignup/LoginSignup' element={<LoginSignup />} />
              <Route path='/Components/TeamAdd/TeamForm' element={<TeamForm />} />
              <Route path='/Components/Task/TaskComponent' element={<TaskComponent />} />
              <Route path='/Components/Projects/ProjectComponent' element={<ProjectComponent />} />
              <Route path='/Components/NavigationBar/AboutPage' element={<AboutPage />} />
            </Routes>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
