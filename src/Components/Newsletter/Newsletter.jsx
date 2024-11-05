import React, { useState } from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";

const Newsletter = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    if (email.trim() !== "") {
      setSubscribed(true);
    }
  };

  return (
    <section>
      <Container className="newsletter">
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="mb-4">Subscribe Our Newsletter</h2>
            <div className="subscribe">
              {!subscribed ? (
                <>
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <button
                    className="btn"
                    onClick={handleSubscribe}
                    disabled={email.trim() === ""}
                  >
                    Subscribe
                  </button>
                </>
              ) : (
                <p style={{ color: '#3c009d', fontSize: '48px', fontWeight: 700}}>Welcome To Our Community</p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
