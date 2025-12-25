import { Container } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";
import "./styles/knowledgeWellness.css";
import img1 from "../assets/images/k2.jpg"
import img2 from "../assets/images/k3.jpg"
import img3 from "../assets/images/k4.jpg"


const cards = [
  {
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna",
    date: "Date dd-mmm-yyyy",
    image:img1,
  },
  {
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna",
    date: "Date dd-mmm-yyyy",
    image:img2,

  },
  {
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna",
    date: "Date dd-mmm-yyyy",
    image:img3,

  },
  {
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna",
    date: "Date dd-mmm-yyyy",
    image:img1,

  },
   
];

const KnowledgeWellness = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="knowledge-section">
      <Container>
        {/* Header */}
        <div className="knowledge-header">
          <h2 style={{color: "#0b1c8f",fontWeight:"bold"}}>Knowledge and Wellness Center</h2>
          <div className="arrows">
            <button onClick={() => scroll("left")}>
              <FaChevronLeft />
            </button>
            <button onClick={() => scroll("right")}>
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="knowledge-scroll" ref={scrollRef}>
          {cards.map((item, index) => (
            <div className="knowledge-card" key={index}>
              <div className="card-image">
                 <img
                    src={item.image}
                    alt={item.name}
                    className="condition-image"
                  />
              </div>

              <p className="card-text">{item.text}</p>
              <small>{item.date}</small>

              <button className="read-more">
                Read More <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default KnowledgeWellness;
