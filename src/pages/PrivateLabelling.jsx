import React from "react";
import { Container } from "react-bootstrap";
import { FaTools } from "react-icons/fa";

const PrivateLabeling = () => {
  return (
    <section className="coming-soon-page">
      <Container className="text-center">
        <div className="coming-soon-box">
          <FaTools className="coming-icon" />
          <h1>Coming Soon</h1>
          <p>
            We’re working hard to bring you the <strong>Private Labeling</strong>{" "}
            experience. Stay tuned!
          </p>
        </div>
      </Container>
    </section>
  );
};

export default PrivateLabeling;
