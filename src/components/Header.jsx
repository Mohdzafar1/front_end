import { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Offcanvas,
  Button,
} from "react-bootstrap";
import {
  FaHeart,
  FaUser,
  FaShoppingCart,
  FaSearch,
  FaBars,
} from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQty = cartItems.reduce((total, item) => total + item.qty, 0);

  const [show, setShow] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

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

          {/* Search (Desktop only) */}
          <Form className="d-none d-lg-flex position-relative mx-4 w-100" style={{ maxWidth: "600px" }}>
            <FormControl
              type="search"
              placeholder="Search products..."
              className="rounded-pill ps-4 pe-5"
              style={{ boxShadow: "none", height: "46px" }}
            />
            <FaSearch
              style={{
                position: "absolute",
                right: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "17px",
                color: "#0b1c8f",
              }}
            />
          </Form>

          {/* Icons */}
          <div className="d-flex align-items-center gap-3 fs-5">
            {/* Desktop Heart & User */}
            <div className="d-none d-lg-flex gap-3" style={{ color: "#0b1c8f" }}>
              <FaHeart />
              <FaUser />
            </div>

            {/* Mobile Search Icon */}
            <FaSearch
              className="d-lg-none"
              style={{ color: "#0b1c8f", cursor: "pointer" }}
              onClick={() => setShowMobileSearch(!showMobileSearch)}
            />

            {/* Cart */}
            <Link to="/cart" className="position-relative" style={{ color: "#0b1c8f" }}>
              <FaShoppingCart />
              {totalQty > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalQty}
                </span>
              )}
            </Link>
           
            {/* Hamburger */}
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

      {/* 🔽 Mobile Search Panel */}
      {showMobileSearch && (
        <div className="d-lg-none bg-white px-3 py-3 border-bottom">
          <Form className="position-relative mb-3">
            <FormControl
              type="search"
              placeholder="Search products..."
              className="rounded-pill ps-4 pe-5"
              style={{ height: "46px", boxShadow: "none" }}
            />
            <FaSearch
              style={{
                position: "absolute",
                right: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#0b1c8f",
              }}
            />
            
          </Form>

          {/* Heart & User in mobile panel */}
         
        </div>
      )}

      {/* Desktop Navigation */}
      <Navbar className="py-2 d-none d-lg-block" style={{ background: "#D3D3D3" }}>
        <Container fluid>
          <Nav className="mx-auto gap-4 fw-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-decoration-none"
                style={{ color: "#0b1c8f" }}
              >
                {link.label}
              </Link>
            ))}
          </Nav>
        </Container>
      </Navbar>

      {/* Mobile Sidebar */}
      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column gap-3">
           <div className="d-flex justify-content-around fs-4" style={{ color: "#0b1c8f" }}>
            <div className="text-center">
              <FaHeart />
              <p className="mb-0 fs-6">Wishlist</p>
            </div>
            <div className="text-center">
              <FaUser />
              <p className="mb-0 fs-6">Account</p>
            </div>
          </div>
       
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={handleClose}
                className="text-decoration-none fs-5"
                style={{ color: "#0b1c8f" }}
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
