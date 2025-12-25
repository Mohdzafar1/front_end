import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";
import { SiGooglepay } from "react-icons/si";
import "./styles/paymentPage.css";

const PaymentPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [showPay, setShowPay] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const handlePayment = () => {
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <section className="payment-page py-5">
      <Container>
        <Row className="g-4">
          {/* LEFT – PAYMENT OPTIONS */}
          <Col lg={7}>
            <Card className="payment-card">
              <Card.Body>
                <h5 className="fw-bold mb-3">Payment Method</h5>

                <div className="payment-option active">
                  <input type="radio" name="payment" defaultChecked />
                  <span>Google Pay (UPI)</span>
                </div>

                <Button
                  className="pay-btn mt-4 w-100"
                  onClick={() => setShowPay(true)}
                >
                  Pay ₹{totalAmount}
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* RIGHT – ORDER SUMMARY */}
          <Col lg={5} style={{paddingBottom:"60px"}}>
            <Card className="summary-card">
              <Card.Body>
                <h5 className="fw-bold mb-3">Order Summary</h5>

                {cartItems.map((item) => (
                  <div key={item.id} className="summary-item">
                    <span>
                      {item.name} × {item.qty}
                    </span>
                    <span>₹{item.price * item.qty}</span>
                  </div>
                ))}

                <hr />

                <div className="summary-total">
                  <span>Total</span>
                  <span>₹{totalAmount}</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* GOOGLE PAY MODAL */}
      <Modal show={showPay} centered backdrop="static">
        <Modal.Body className="text-center p-4">
          {!success ? (
            <>
              <SiGooglepay size={60} color="#4285F4" />
              <h5 className="mt-3">Pay with Google Pay</h5>
              <p className="text-muted">Amount ₹{totalAmount}</p>

              <Button
                className="gpay-btn mt-3"
                disabled={processing}
                onClick={handlePayment}
              >
                {processing ? "Processing..." : "Pay Now"}
              </Button>
            </>
          ) : (
            <>
              <h4 className="text-success">Payment Successful ✅</h4>
              <p className="mt-2">Thank you for your purchase</p>

              <Button
                className="mt-3"
                onClick={() => setShowPay(false)}
              >
                Close
              </Button>
            </>
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default PaymentPage;
