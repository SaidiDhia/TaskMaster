import React from "react";
import "./LoginScreen.css";
import { Modal, Button } from "react-bootstrap";

const LoginScreen = ({ show, onClose, onLogin, section }) => {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Welcome!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Please sign in or continue as a guest to access the {section} section.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>guest</Button>
        <Button variant="primary" onClick={onLogin}>Login</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginScreen;
