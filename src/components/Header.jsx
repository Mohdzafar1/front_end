import { useState } from "react";
import { Navbar, Container, Nav, Form, FormControl, Offcanvas, Button } from "react-bootstrap";
import { FaHeart, FaUser, FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQty = cartItems.reduce((total, item) => total + item.qty, 0);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/shop-body-part", label: "Shop by Body Part" },
    { to: "/shop-condition", label: "Shop by Condition" },
    { to: "/blogs", label: "Blogs" },
    { to: "/private-labeling", label: "Private Labeling" },
  ];

  return (
    <header>
      {/* Top Bar */}
      <Navbar bg="white" className="shadow-sm py-2">
        <Container className="d-flex align-items-center justify-content-between">
          {/* Logo */}
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Aurthot" height="65" />
          </Navbar.Brand>

          {/* Search */}
          <Form className="d-flex flex-grow-1 mx-4 position-relative" style={{ maxWidth: "500px" }}>
            <FormControl
              type="search"
              placeholder="Enter SKU or product name"
              className="rounded-pill ps-3 pe-5"
              style={{ boxShadow: "none" }}
            />
            <FaSearch
              style={{
                position: "absolute",
                right: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "16px",
                color: "#0b1c8f",
                pointerEvents: "none",
              }}
            />
          </Form>

          {/* Icons */}
          <div className="d-flex align-items-center gap-3 fs-5">
            {/* Heart & User icons: show only on large screens */}
            <div className="d-none d-lg-flex align-items-center gap-3" style={{ color: "#0b1c8f" }}>
              <FaHeart className="icon-hover" />
              <FaUser className="icon-hover" />
            </div>

            {/* Cart icon: always visible */}
            <Link to="/cart" className="position-relative" style={{ color: "#0b1c8f" }}>
              <FaShoppingCart className="icon-hover" />
              {totalQty > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalQty}
                </span>
              )}
            </Link>

            {/* Hamburger for mobile */}
            <Button
              variant="outline-none"
              className="d-lg-none border-0"
              onClick={handleShow}
              style={{ color: "#0b1c8f" }}
            >
              <FaBars size={24} />
            </Button>
          </div>
        </Container>
      </Navbar>

      {/* Navigation Bar for large screens */}
      <Navbar className="py-2 d-none d-lg-block" style={{ background: "#D3D3D3" }}>
        <Container fluid>
          <Nav className="mx-auto gap-4 fw-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                style={{ color: "#0b1c8f" }}
                to={link.to}
                className="text-decoration-none"
              >
                {link.label}
              </Link>
            ))}
          </Nav>
        </Container>
      </Navbar>

      {/* Offcanvas Sidebar for mobile */}
      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={{ color: "#0b1c8f" }}
                onClick={handleClose}
                className="text-decoration-none fs-5"
              >
                {link.label}
              </Link>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Header;
