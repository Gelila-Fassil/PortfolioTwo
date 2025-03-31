import "./about.css";

const Experience = () => {
  return (
    <div className="experience">
      <h2>Experience</h2>
      <div className="cards-container">
        {/* Experience Card 1 */}
        <div className="card">
          <div className="card-icon">
            <i className="bi bi-briefcase-fill"></i>
          </div>
          <h3>Full Stack Developer</h3>
          <p>
            <br />
            MERN Stack, MySQL, Next.js, Strapi, RESTful APIs, Authentication
          </p>
        </div>

        <div className="card">
          <div className="card-icon">
            <i className="bi bi-briefcase-fill"></i>
          </div>
          <h3>Wordpress Developer</h3>
          <p>
            <br />
            SEO, WordPress, Elementor, WooCommerce, Custom Themes and Plugins
          </p>
        </div>























        {/* Experience Card 2 */}
        <div className="card">
          <div className="card-icon">
            <i className="bi bi-briefcase-fill"></i>
          </div>
          <h3>React Developer</h3>
          <p>
            <br />
            React.js, Redux, Hooks, Component Architecture, State Management
          </p>
        </div>

        {/* Experience Card 3 */}
        <div className="card">
          <div className="card-icon">
            <i className="bi bi-briefcase-fill"></i>
          </div>
          <h3>Backend Developer</h3>
          <p>
            <br />
            Node.js, Express.js, MongoDB, MySQL, Strapi, RESTful APIs, JWT
            Authentication.
          </p>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="education">
      <h2 >Education</h2>
      <div className="cards-container">
        {/* Education Card 1 */}
        <div className="card">
          <div className="card-icon">
            <i className="bi bi-mortarboard-fill"></i>
          </div>
          <h3>Certified Full Stack Developer</h3>
          <p>
            <strong>Institution:</strong> Evangadi tech <br />
            <strong>Year:</strong> 2023 - 2024
          </p>
        </div>

        {/* Education Card 2 */}
        <div className="card">
          <div className="card-icon">
            <i className="bi bi-mortarboard-fill"></i>
          </div>
          <h3>Software Engineering Student</h3>
          <p>
            <strong> Collage :</strong> Bits Collage
            <br />
            <strong>Year:</strong> 2024
          </p>
        </div>

        {/* Education Card 3 */}
        {/* <div className="card">
          <div className="card-icon">
            <i className="bi bi-mortarboard-fill"></i>
          </div>
          <h3>Android Developer</h3>
          <p>
            <strong>Institution:</strong> Udacity <br />
            <strong>Year:</strong> 2024
          </p>
        </div> */}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <span>About Me</span>
            <h2>About Me</h2>
            <p>
              I'm Gelila Fassil, a versatile Full Stack Developer with expertise
              in the MERN stack, including MongoDB, Express.js, React, and
              Node.js, as well as proficiency in MySQL, Next.js, and Strapi. I
              have a strong passion for building dynamic and responsive web
              applications that deliver exceptional user experiences.
            </p>
          </div>

       
          <Experience />
          <Education />

          {/* Resume Section */}
          <div className="row">
            <div className="col-lg-8 d-flex flex-column align-items-stretch">
              <div className="content ps-lg-4">{/* <Resume /> */}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
