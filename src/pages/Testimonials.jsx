import { Container } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { useRef } from "react";
import "./styles/testimonials.css";
import img1 from "../assets/images/t1.jpg"
import img2 from "../assets/images/t2.jpg"
import img3 from "../assets/images/t3.jpg"
import img4 from "../assets/images/t4.jpeg"



const testimonials = [
  {
    name: "Sophia Williams",
    image:img1,
    text:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio",
  },
  {
    name: "Michael Brown",
    image:img2,
    text:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio",
  },
  {
    name: "Emma Johnson",
    image:img3,
    text:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio",
  },
    {
    name: "Mohd Zafar",
    image:img4,
    text:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio",
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -380 : 380,
      behavior: "smooth",
    });
  };

  return (
    <section className="testimonial-section bg-light">
      <Container>

        {/* Header */}
        <div className="testimonial-header">
          <h2 style={{color: "#0b1c8f",fontWeight:"bold"}}>What People Have To Say About Us</h2>
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
        <div className="testimonial-scroll" ref={scrollRef}>
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>

              <div className="testimonial-top">
                <div className="avatar">
                   <img
                    src={item.image}
                    alt={item.name}
                    className="condition-image"
                  />
                </div>

                <div>
                  <h5>{item.name}</h5>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>

              <p className="testimonial-text">{item.text}</p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Testimonials;
