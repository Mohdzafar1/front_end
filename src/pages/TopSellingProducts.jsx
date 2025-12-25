import { Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "./styles/topSellingProducts.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import img1 from "../assets/images/pKnewe.png"
import img2 from "../assets/images/pTorso .png"
import img3 from "../assets/images/pArm&Shoulder.png"
import img4 from "../assets/images/pNeck&Cervical.png"




const products = [
  { id: 1, title: "Lorem ipsum dolor sit amet, consectetuer", price: 8999, oldPrice: 9999, image:img1 },
  { id: 2, title: "Lorem ipsum dolor sit amet, consectetuer", price: 8599, oldPrice: 9999,image:img2 },
  { id: 3, title: "Lorem ipsum dolor sit amet, consectetuer", price: 7999, oldPrice: 9999,image:img3 },
  { id: 4, title: "Lorem ipsum dolor sit amet, consectetuer", price: 6999, oldPrice: 9999,image:img4 },
   { id: 5, title: "Lorem ipsum dolor sit amet, consectetuer", price: 5999, oldPrice: 9999, image:img4},
  { id: 6, title: "Lorem ipsum dolor sit amet, consectetuer", price: 4999, oldPrice: 9999,image:img3  },
  { id: 7, title: "Lorem ipsum dolor sit amet, consectetuer", price: 3999, oldPrice: 9999,image:img2 },
  { id: 8, title: "Lorem ipsum dolor sit amet, consectetuer", price: 3999, oldPrice: 9999,image:img1 },
];

const TopSellingProducts = () => {
  const dispatch = useDispatch();
  return (
    <section className="top-selling-section">
      <Container>
        <h2 className="section-title" style={{color: "#0b1c8f",fontWeight:"bold"}}>Our Top Selling Products</h2>

        <div className="products-grid">
          {products.map((item) => (
            <div className="product-card" key={item.id}>
              
              <div className="product-image">
                <img src={item.image} alt={item.title} />
              </div>


              <p className="product-title">{item.title}</p>

              <div className="price-row">
                <span className="price">Rs. {item.price.toLocaleString()}</span>
                <span className="old-price">9,999.00</span>
              </div>

              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <button className="shop-btn" onClick={() => dispatch(addToCart(item))}>SHOP NOW</button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TopSellingProducts;
