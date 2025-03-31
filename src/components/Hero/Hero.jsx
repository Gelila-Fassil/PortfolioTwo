import './hero.css'

const Hero = () => {
  return (
    <div>
      <section id="hero">
        <div className="hero-container">
          <h1>Gelila Fassil</h1>
          <h2>I'M A Full Stack MERN Application Developer</h2>
          <a href="#about" className="btn-scroll scrollto" title="Scroll Down">
            <i className="bx bx-chevron-down"></i>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Hero