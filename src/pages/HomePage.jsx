import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/images/home1.jpg";
import img2 from "../assets/images/home2.jpg";
import img3 from "../assets/images/home3.jpg";
import "./styles/home.css";
import ShopByCondition from "./ShopByCondition";
import WhyChooseUs from "./WhyChooseUs";
import ShopByBodyParts from "./ShopByBodyParts";
import TopSellingProducts from "./TopSellingProducts";
import KnowledgeWellness from "./KnowledgeWellness";
import Testimonials from "./Testimonials";

const HomePage = () => {
  return (
      <div>
        <Carousel>
      {[img1, img2, img3].map((img, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 carousel-img"
            src={img}
            alt={`Slide ${index + 1}`}
          />
          <Carousel.Caption>
            <h5>Slide heading</h5>
            <p>Short description goes here</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
      <ShopByCondition/>
      <WhyChooseUs/>
      <ShopByBodyParts/>
      <TopSellingProducts/>
      <KnowledgeWellness/>
      <Testimonials/>
      </div>
  );
};

export default HomePage;
