import React from 'react'
import { Container } from "react-bootstrap";
import { FaTools } from "react-icons/fa";

const ShopbysCondition = () => {
  return (
   <section className="coming-soon-page">
      <Container className="text-center">
        <div className="coming-soon-box">
          <FaTools className="coming-icon" />
          <h1>Coming Soon</h1>
          <p>
            We’re working hard to bring you the <strong>Shop By Condition</strong>{" "}
            experience. Stay tuned!
          </p>
        </div>
      </Container>
    </section>
  )
}

export default ShopbysCondition
