import { useEffect, useState } from "react";
import "./header.css";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  // Detect scroll position and toggle class
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); 
  };

  return (
    <div>
      <header
        id="header"
        className={`fixed-top d-flex justify-content-center align-items-center ${
          isScrolled ? "header-scrolled" : "header-transparent"
        }`}
      >
        <nav id="navbar" className="navbar">
          <div className="mobile-nav-toggle" onClick={toggleMenu}>
            <IoMdMenu />
          </div>
          <ul className={`navbar-links ${isMenuOpen ? "navbar-mobile" : ""}`}>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
