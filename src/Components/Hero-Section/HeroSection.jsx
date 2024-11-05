import React, { useState } from "react";
import LoginScreen from "./LoginScreen";
import { Button } from "react-bootstrap";
import { FiSettings, FiCheckSquare, FiUsers, FiFileText } from "react-icons/fi"; // Import icons
import heroImg from "../../assests/images/w-100 hero__img.png";
import "./hero-section.css";

const HomePage = () => {
  const [showLoginScreen, setShowLoginScreen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const handleButtonClick = (section) => {
    setSelectedSection(section);
    setShowLoginScreen(true);
  };

  const handleLogin = () => {
    // Add your login logic here
    console.log("Logging in...");
  };

  const handleCloseLoginScreen = () => {
    setShowLoginScreen(false);
  };

  return (
    <div className="home-page">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center mb-4" style={{ color: '#3c009d', fontSize: '48px', fontWeight: 700}}>Check Us Out !</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 order-md-2">
            <div className="login-image-container">
              <img src={heroImg} alt="Login" />
            </div>
          </div>
          <div className="col-md-6 order-md-1">
            <div className="custom-button" style={{ marginTop: "30px" }}>
              <div className="row">
                <div className="col-md-6">
                  <Button
                    variant="primary"
                    style={{
                      backgroundColor: "#6a0dad",
                      border: "2px solid #6a0dad",
                      color: "#fff",
                      padding: "60px", // Equal padding for square appearance
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "15px",
                      transition: "all 0.3s",
                    }}
                    onClick={() => handleButtonClick("Projects")}
                    onMouseEnter={(e) => e.target.style.background = "#4b0082"}
                    onMouseLeave={(e) => e.target.style.background = "#6a0dad"}
                  >
                    <FiSettings size={24} style={{ marginRight: "10px" }} /> Projects
                  </Button>
                  <Button
                    variant="primary"
                    style={{
                      backgroundColor: "#6a0dad",
                      border: "2px solid #6a0dad",
                      color: "#fff",
                      padding: "65px", // Equal padding for square appearance
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "15px",
                      transition: "all 0.3s",
                    }}
                    onClick={() => handleButtonClick("Tasks")}
                    onMouseEnter={(e) => e.target.style.background = "#4b0082"}
                    onMouseLeave={(e) => e.target.style.background = "#6a0dad"}
                  >
                    <FiCheckSquare size={24} style={{ marginRight: "10px" }} /> Tasks
                  </Button>
                </div>
                <div className="col-md-6">
                  <Button
                    variant="primary"
                    style={{
                      backgroundColor: "#6a0dad",
                      border: "2px solid #6a0dad",
                      color: "#fff",
                      padding: "60px", // Equal padding for square appearance
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "15px",
                      transition: "all 0.3s",
                    }}
                    onClick={() => handleButtonClick("Team Form")}
                    onMouseEnter={(e) => e.target.style.background = "#4b0082"}
                    onMouseLeave={(e) => e.target.style.background = "#6a0dad"}
                  >
                    <FiUsers size={24} style={{ marginRight: "10px" }} /> Team Form
                  </Button>
                  <Button
                    variant="primary"
                    style={{
                      backgroundColor: "#6a0dad",
                      border: "2px solid #6a0dad",
                      color: "#fff",
                      padding: "60px", // Equal padding for square appearance
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "15px",
                      transition: "all 0.3s",
                    }}
                    onClick={() => handleButtonClick("Documents")}
                    onMouseEnter={(e) => e.target.style.background = "#4b0082"}
                    onMouseLeave={(e) => e.target.style.background = "#6a0dad"}
                  >
                    <FiFileText size={24} style={{ marginRight: "10px" }} /> Documents
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LoginScreen
        show={showLoginScreen}
        onClose={handleCloseLoginScreen}
        onLogin={handleLogin}
        section={selectedSection}
      />
    </div>
  );
};

export default HomePage;
