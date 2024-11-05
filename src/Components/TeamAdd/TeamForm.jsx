import React, { useState } from 'react';
import { Form, Button, ListGroup, Alert } from 'react-bootstrap';
import './TeamForm.css';

const TeamForm = () => {
  const [teamName, setTeamName] = useState('');
  const [teamDescription, setTeamDescription] = useState('');
  const [newMember, setNewMember] = useState('');
  const [teamMembers, setTeamMembers] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formMoved, setFormMoved] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!teamName.trim()) {
      setFormErrors({ teamName: 'Team name is required' });
      return;
    }
    if (!teamDescription.trim()) {
      setFormErrors({ teamDescription: 'Team description is required' });
      return;
    }
    console.log('Form submitted:', { teamName, teamDescription, teamMembers });
    setFormErrors({});
    setTeamName('');
    setTeamDescription('');
    setShowSuccessMessage(true);
    setFormMoved(true); // form moves to the left when submitted
  };

  const handleAddMember = () => {
    if (newMember.trim() !== '') {
      setTeamMembers([...teamMembers, newMember]);
      setNewMember('');
      if (!formMoved) {
        setFormMoved(true); // form moves to the left when adding member
      }
    }
  };

  const handleRemoveMember = (index) => {
    setTeamMembers(teamMembers.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className={`container ${formMoved ? 'moved' : ''}`}>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="text-center" style={{ color: '#3c009d', fontSize: '48px', fontWeight: 700, textDecoration: 'underline' }}>Create a Team</h2>
            {showSuccessMessage && (
              <Alert variant="success" onClose={() => setShowSuccessMessage(false)} dismissible>
                Team created successfully!
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="teamName">
                <Form.Label>Team Name</Form.Label>
                <Form.Control
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="Enter team name"
                  isInvalid={!!formErrors.teamName}
                />
                <Form.Control.Feedback type="invalid">{formErrors.teamName}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="teamDescription">
                <Form.Label>Team Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={teamDescription}
                  onChange={(e) => setTeamDescription(e.target.value)}
                  placeholder="Enter team description"
                  isInvalid={!!formErrors.teamDescription}
                />
                <Form.Control.Feedback type="invalid">{formErrors.teamDescription}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="newMember">
                <Form.Label>New Member</Form.Label>
                <Form.Control
                  type="text"
                  value={newMember}
                  onChange={(e) => setNewMember(e.target.value)}
                  placeholder="Enter new member"
                />
              </Form.Group>
              <Button variant="primary" type="button" onClick={handleAddMember}>
                Add Member
              </Button>
            </Form>
          </div>
          {teamMembers.length > 0 && (
            <div className="col-md-8 mt-4">
              <h3 className="text-center">{teamName}</h3>
              <ListGroup>
                {teamMembers.map((member, index) => (
                  <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                    {member}
                    <Button variant="danger" size="sm" onClick={() => handleRemoveMember(index)}>Remove</Button>
                  </ListGroup.Item>
                ))}
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Create Team
                </Button>
              </ListGroup>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TeamForm;
