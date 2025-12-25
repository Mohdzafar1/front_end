import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaymentPage from "./pages/PaymentPage.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShopByBodyPart from "./pages/ShopByBodyPart.jsx";
import ShopbysCondition from "./pages/ShopbysCondition.jsx";
import Blogs from "./pages/Blogs.jsx";
import PrivateLabeling from "./pages/PrivateLabelling.jsx";

function App() {
  return (
     <>
       <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop-body-part" element={<ShopByBodyPart/>} />
        <Route path="/shop-condition" element={<ShopbysCondition/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/private-labeling" element={<PrivateLabeling/>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage/>} />
      </Routes>

      <Footer />
      
    </Router>
    <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
     </>
  );
}

export default App;
