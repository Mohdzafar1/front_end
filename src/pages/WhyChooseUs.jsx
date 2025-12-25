import { Container, Row, Col } from "react-bootstrap";
import "./styles/shopByCondition.css";

import improvementImg from "../assets/images/w1.png";
import premiumImg from "../assets/images/w2.png";
import bestImg from "../assets/images/w3.png";
import returnImg from "../assets/images/w4.png";

const data = [
  {
    image: improvementImg,
    title: "CONTINUOUS IMPROVEMENT",
    text: "is our core value and foundation of everything we do",
    highlight: true,
  },
  {
    image: returnImg,
    title: "EASY RETURNS AND REPLACEMENT",
    text: "within 7-days from the date of purchase",
    highlight: true,
  },
];
const newData=[
   {
    image: premiumImg,
    text: "Designed in collaboration with medical experts using",
    title: "PREMIUM MATERIAL",
  },
  {
    image: bestImg,
    title: "BEST PERFORMING",
    text: "Focused and dedicated towards making only products for our customers",
  },
]

const WhyChooseUs = () => {
  return (
    <section className="why-section bg-light my-5 py-5">
      <Container>
        <Row className="g-4">
          {data.map((item, index) => (
            <Col key={index} xs={12} sm={6} lg={3}>
              <div className="why-card text-center">
                
                {/* Icon Circle */}
                <div className="why-icon">
                  <img src={item.image} alt={item.title} />
                </div>

                {/* Text */}
                <p className="why-text">
                  <span style={{fontSize:"30px",color: "#0b1c8f",fontWeight:"bold"}}>
                    {item.title}
                  </span>{" "}
                  {item.text}
                </p>

              </div>
            </Col>
          ))}
           {newData.map((item, index) => (
            <Col key={index} xs={12} sm={6} lg={3}>
              <div className="why-card text-center">
                
                {/* Icon Circle */}
                <div className="why-icon">
                  <img src={item.image} alt={item.title} />
                </div>

                {/* Text */}
                <p className="why-text">
                  <span >
                  {item.text}
                  </span>{" "}
                  <span style={{fontSize:"30px",color: "#0b1c8f",fontWeight:"bold"}}>  {item.title}</span>
                  
                </p>

              </div>
            </Col>
          ))}
          
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
