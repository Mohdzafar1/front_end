import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaBone,
  FaUserInjured,
  FaHandPaper,
  FaShoePrints,
} from "react-icons/fa";
import "./styles/shopByCondition.css";
import KneePain from "../assets/images/kneePain.png"
import backPain from "../assets/images/backPainNew.png"
import shoulderPain from "../assets/images/soulderPain.png"
import neckPain from "../assets/images/neckpain.png"
import anklePain from "../assets/images/ancklePain.png"
import wristPain from "../assets/images/restPain.png"
import elbowPain from "../assets/images/elgoPain.png"
import footPain from "../assets/images/footPainnew.png"







const conditions = [
  { title: "Knee Pain", image: KneePain },
  { title: "Back Pain", image: backPain },
  { title: "Shoulder Pain", image: shoulderPain },
  { title: "Neck Pain", image: neckPain },
  { title: "Ankle Pain", image: anklePain },
  { title: "Wrist Pain", image: wristPain },
  { title: "Elbow Pain", image: elbowPain },
  { title: "Foot Pain", image: footPain },
];


const ShopByCondition = () => {
  return (
   <section className="shop-condition-section my-5 py-3">
      <Container>
        <h2 className="section-title pb-5" style={{color: "#0b1c8f",fontWeight:"bold"}}>Shop By Condition</h2>

        <Row className="g-4">
          {conditions.map((item, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Card className="condition-card h-100 text-center">
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="condition-image"
                  />

                  {/* Title */}
                  <Card.Title className="mt-3" >
                    {item.title}
                  </Card.Title>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ShopByCondition;
