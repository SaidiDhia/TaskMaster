import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import AbouUS from 'C:/Users/MSI/Desktop/GLSI 2/s2/pfa/login-signup/PFA/src/assests/images/about-us.png'

import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About US",
    url: "#",
  },
  {
    display: "Documents",
    url: "#",
  },
  {
    display: "Projects",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 className="d-flex align-items-center gap-1" style={{ color: '#3c009d', fontSize: '30px', fontWeight: 700, textDecoration: 'underline' }}>
              TaskMaster 
            </h2>
            <img src={AbouUS} alt="AboutUs" style={{ marginLeft: '50px', width: '100px', height: 'auto' }} />
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold" style={{ color: '#3c009d', fontSize: '25px', fontWeight: 700, textDecoration: 'underline' }}>Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="fw-bold" style={{ color: '#3c009d', fontSize: '25px', fontWeight: 700, textDecoration: 'underline' }}>Get in Touch</h6>
            <p>Address: faculte de science de bizerte</p>
            <p> Phone: +216 9918285 </p>
            <p>Email: Taskmaster@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
