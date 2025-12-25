import { Container } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";
import "./styles/shopByBodyParts.css";

import knee from "../assets/images/knewAndAngle.png";
import torso from "../assets/images/torsorSuport.png";
import arm from "../assets/images/armAndSoulder.png";
import neck from "../assets/images/neck.png";
import finger from "../assets/images/finger.png";


const items = [
  { img: knee, label: "Knee & Ankle"},
  { img: torso, label: "Torso Support"},
  { img: arm, label: "Arm & Shoulder"},
  { img: neck, label: "Neck & Cervical"},
  { img: finger, label: "Finger Splints"},
    { img: knee, label: "Knee & Ankle"},
  { img: torso, label: "Torso Support" },
  // add more if needed
];

const ShopByBodyParts = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 260;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="shop-section">
      <Container>

        {/* Header */}
        <div className="shop-header">
          <h2 style={{color: "#0b1c8f",fontWeight:"bold"}}>Shop By Body Parts</h2>
          <div className="arrows">
            <button onClick={() => scroll("left")}>
              <FaChevronLeft />
            </button>
            <button onClick={() => scroll("right")}>
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Scroll Area */}
        <div className="scroll-wrapper" ref={scrollRef}>
          {items.map((item, i) => (
            <div className="body-card" key={i}>
              <div
                className="icon-circle"
                style={{ backgroundColor: item.color }}
              >
                <img src={item.img} alt={item.label} />
              </div>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default ShopByBodyParts;
