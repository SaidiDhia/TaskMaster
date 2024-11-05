import React from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.css";
import img from "../../assests/images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };

  return (
    <section className="testimonial-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg="10" md="12">
            <div className="testimonial-wrapper">
              <div className="testimonial-img">
                <img src={img} alt="Testimonial" className="img-fluid" />
              </div>
              <div className="testimonial-content">
                <h2 className="mb-4">What Our Students Say</h2>
                <Slider {...settings}>
                  <div>
                    <div className="single-testimonial">
                      <h6 className="mb-3 fw-bold">Fantastic</h6>
                      <p>
                        "TaskMaster has made teamwork a breeze. We can easily
                        communicate, share files, and coordinate tasks, even
                        when working remotely. It's truly a game-changer for
                        collaborative projects."
                      </p>
                      <div className="student-info">
                        <h6 className="fw-bold">Roua Zribi</h6>
                        <p>Seliana</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="single-testimonial">
                      <h6 className="mb-3 fw-bold">Excellent</h6>
                      <p>
                        "TaskMaster has revolutionized the way our team manages
                        projects. With its intuitive interface and powerful
                        features, we can easily assign tasks, track progress,
                        and collaborate effectively."
                      </p>
                      <div className="student-info">
                        <h6 className="fw-bold">Dhia Said</h6>
                        <p>Ras Jbal, Bizerte</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="single-testimonial">
                      <h6 className="mb-3 fw-bold">Great</h6>
                      <p>
                        "Thanks to TaskMaster, our team's productivity has
                        soared. We no longer waste time on endless email chains
                        or misplaced documents. Everything we need is
                        centralized, making project management seamless."
                      </p>
                      <div className="student-info">
                        <h6 className="fw-bold">Aouadi Louay</h6>
                        <p>Ras Jbal, Bizerte</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="single-testimonial">
                      <h6 className="mb-3 fw-bold">Amazing</h6>
                      <p>
                        "Thank you, Task Master, for being my ultimate
                        productivity companion, streamlining tasks and boosting
                        efficiency like never before!"
                      </p>
                      <div className="student-info">
                        <h6 className="fw-bold">Melik Ben Salah</h6>
                        <p>Ras Jbal, Bizerte</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
