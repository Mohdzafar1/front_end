import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  addToCart,
  decreaseQty,
} from "../redux/slices/cartSlice";
import "./styles/cartPage.css";
import { Link } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <section className="cart-page py-5">
      <Container>
        <h2 className="cart-title mb-4">Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h5>Your cart is empty 🛒</h5>
          </div>
        ) : (
          <Row className="g-4">
            {/* LEFT – CART ITEMS */}
            <Col lg={8}>
              {cartItems.map((item) => (
                <Card className="cart-item-card mb-3" key={item.id}>
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col md={2}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="cart-img"
                        />
                      </Col>

                      <Col md={4}>
                        <h6 className="fw-bold">{item.name}</h6>
                        <p className="price">₹{item.price}</p>
                      </Col>

                      <Col md={3}>
                        <div className="qty-box">
                          <button
                            onClick={() => dispatch(decreaseQty(item.id))}
                          >
                            −
                          </button>
                          <span>{item.qty}</span>
                          <button
                            onClick={() => dispatch(addToCart(item))}
                          >
                            +
                          </button>
                        </div>
                      </Col>

                      <Col md={3} className="text-end">
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          Remove
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ))}
            </Col>

            {/* RIGHT – ORDER SUMMARY */}
            <Col lg={4} style={{paddingBottom:"60px"}}>
              <Card className="summary-card">
                <Card.Body>
                  <h5 className="fw-bold mb-3">Order Summary</h5>

                  <div className="summary-row">
                    <span>Subtotal</span>
                    <span>₹{totalPrice}</span>
                  </div>

                  <div className="summary-row">
                    <span>Shipping</span>
                    <span>FREE</span>
                  </div>

                  <hr />

                  <div className="summary-total">
                    <span>Total</span>
                    <span>₹{totalPrice}</span>
                  </div>
                   <Link to="/payment">
                    <Button  className="checkout-btn mt-4 w-100">
                       Proceed to Payment
                   
                  </Button>

                   </Link>
                 
                  <Button
                    variant="outline-danger"
                    className="w-100 mt-2"
                    onClick={() => dispatch(clearCart())}
                  >
             
                    Clear Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default CartPage;
