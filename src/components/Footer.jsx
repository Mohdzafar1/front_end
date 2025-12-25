import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaLinkedinIn, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import "./styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="gy-4">

          {/* Column 1 */}
          <Col lg={3} md={6} sm={12}>
            <h5>Splints and Braces</h5>
            <ul>
              <li>Knee and Ankle</li>
              <li>Torso Support</li>
              <li>Arm and Shoulder</li>
              <li>Neck and Cervical</li>
              <li>Finger Splints</li>
              <li>Footcare</li>
              <li>Physio Aids</li>
              <li>Walking Aids</li>
            </ul>
          </Col>

          {/* Column 2 */}
          <Col lg={3} md={6} sm={12}>
            <h5>Help Center</h5>
            <ul>
              <li>About Us</li>
              <li>FAQs</li>
              <li>Contact Us</li>
              <li>R.I.C.E. Technique</li>
              <li>Warnings And Precautions</li>
              <li>Price Match Guarantee</li>
              <li>100% Genuine Products</li>
            </ul>
          </Col>

          {/* Column 3 */}
          <Col lg={3} md={6} sm={12}>
            <h5>Our Policies</h5>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy & Policy</li>
              <li>Return Policy</li>
              <li>Shipping Policy</li>
              <li>Cancellation Policy</li>
              <li>Disclaimer</li>
              <li>Warranty</li>
              <li>Secure Payment</li>
            </ul>
          </Col>

          {/* Column 4 */}
          <Col lg={3} md={6} sm={12} className="stay-connected">
            <h5>Stay Connected</h5>

            <Form className="email-form">
              <Form.Control
                type="email"
                placeholder="Enter your email id to get updates..."
              />
              <Button type="submit">Submit</Button>
            </Form>

            <div className="contact">
              <strong>Write to Us at:</strong>
              <p>customercare@aurthot.com</p>
            </div>

            <div className="social-icons">
              <FaLinkedinIn />
              <FaFacebookF />
              <FaWhatsapp />
            </div>
          </Col>

        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
