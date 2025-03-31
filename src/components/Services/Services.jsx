import './services.css'
import { FaReact } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { SiStrapi } from "react-icons/si";
import { GiWorld } from "react-icons/gi";
const Services = () => {
  return (
    <div>
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <span>My Services</span>
            <h2>My Services</h2>
            <p>
              As a Full Stack Web Application Developer, I specialize in
              creating robust and dynamic web applications using the MERN stack
              (MongoDB, Express.js, React, Node.js). I handle everything from
              crafting intuitive front-end interfaces to developing scalable
              back-end solutions, ensuring a seamless user experience. My
              approach focuses on integrating cutting-edge technologies to
              deliver high-performance applications tailored to your business
              goals.
            </p>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon">
                  <FaReact size={45} color="#ffb727" />
                </div>
                <h4 className="title">
                  <a href="">Full Stack Web Development</a>
                </h4>
                <p className="description">
                  Building and maintaining complete web applications using the
                  MERN stack (MongoDB, Express.js, React, Node.js).
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon">
                  <TbApi size={45} color="#ffb727" />
                </div>
                <h4 className="title">
                  <a href="">API Development & Integration</a>
                </h4>
                <p className="description">
                  Designing and implementing RESTful APIs for seamless
                  communication between front-end and back-end systems.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon">
                  <SiStrapi size={45} color="#ffb727" />
                </div>
                <h4 className="title">
                  <a href="">Content Management System (CMS) Development</a>
                </h4>
                <p className="description">
                  Building custom CMS solutions using Strapi for easy content
                  management.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon">
                  <GiWorld size={45} color="#ffb727" />
                </div>
                <h4 className="title">
                  <a href="">Consultation and Advice</a>
                </h4>
                <p className="description">
                  Offering expert guidance and recommendations to help you
                  achieve your website goals effectively
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services