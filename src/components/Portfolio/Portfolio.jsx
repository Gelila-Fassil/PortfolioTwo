import './portfolio.css'
import project1 from './images/acastro_STK103__01.webp'
import project2 from './images/Netflix22.jpg'
import project3 from './images/forum.png'
import project4 from './images/ol2.jpg'
import eds7 from "./images/eds7.jpg"
import wMicel from "./images/wmicel.jpg"
import edss from "./images/edss.jpg"
import ethio from "./images/Ethio.jpg"
import project5 from './images/melka2.png'

import { TiAttachmentOutline } from "react-icons/ti";

const Portfolio = () => {
  return (
    <div>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <span>My Portfolio</span>
            <h2>My Portfolio</h2>
            <p>
              My portfolio showcases my passion for building beautiful and
              easy-to-use websites using HTML, CSS, and JavaScript
            </p>
          </div>

          <ul id="portfolio-flters" className="d-flex justify-content-center">
            <li data-filter="*" className="filter-active">
              All
            </li>
          </ul>

          <div className="row portfolio-container">
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-img">
                <img src={ethio} className="img-fluid" alt="" />
              </div>
              <div className="portfolio-info">
                <h4>Ethiotelecom</h4>
                <p> Under Developement</p>
                <a
                  href="#"
                  className="details-link"
                  title="More Details"
                >
                  <TiAttachmentOutline className="bx bx-link" />
                </a>
              </div>
            </div>


            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-img">
                <img src={project4} className="img-fluid" alt="" />
              </div>
              <div className="portfolio-info">
                <h4>Originland Coffee Import and Export</h4>
                <p>Wordpress</p>
                <a
                  href="https://originlandcoffee.com/"
                  className="details-link"
                  title="More Details"
                >
                  <TiAttachmentOutline className="bx bx-link" />
                </a>
              </div>
            </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-img">
                <img src={eds7} className="img-fluid" alt="" />
              </div>
              <div className="portfolio-info">
                <h4>Fitsum Arega</h4>
                <p>Word Press</p>
                <a
                  href="https://www.fitsumarega.com/"
                  className="details-link"
                  title="More Details"
                >
                  <TiAttachmentOutline className="bx bx-link" />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-img">
                <img src={wMicel} className="img-fluid" alt="" />
              </div>
              <div className="portfolio-info">
                <h4>wmichael import export</h4>
                <p>Word Press</p>
                <a
                  href="https://wmichaelimport-export.com/"
                  className="details-link"
                  title="More Details"
                >
                  <TiAttachmentOutline className="bx bx-link" />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-img">
                <img src={edss} className="img-fluid" alt="" />
              </div>
              <div className="portfolio-info">
                <h4>Ethiopian Diaspora Service</h4>
                <p>Word Press</p>
                <a
                  href="#"
                  className="details-link"
                  title="More Details"
                >
                  <TiAttachmentOutline className="bx bx-link" />
                </a>
              </div>
            </div>


          

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-img">
                <img src={project5} className="img-fluid" alt="" />
              </div>
              <div className="portfolio-info">
                <h4>Melka Ethiopia/Under Development</h4>
                <p>Wordpress</p>
                <a
                  href="#"
                  className="details-link"
                  title="More Details"
                >
                  <TiAttachmentOutline className="bx bx-link" />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-img">
                <img src={project3} className="img-fluid" alt="" />
              </div>
              <div className="portfolio-info">
                <h4>Question and Answer forum</h4>
                <p>React,node js,Mysql </p>
              
                <a
                  href="https://evangadi-discussion-forum-g11.netlify.app"
                  className="details-link"
                  title="More Details"
                >
                  <TiAttachmentOutline className="bx bx-link" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-img">
                <img src={project2} className="img-fluid" alt="" />
              </div>
              <div className="portfolio-info">
                <h4>Netflix clone</h4>
                <p>React</p>
                <a
                  href="https://gelila-fassil.github.io/Netflix-clone-New/"
                  className="details-link"
                  title="More Details"
                >
                  <TiAttachmentOutline className="bx bx-link" />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-img">
                <img src={project1} className="img-fluid" alt="" />
              </div>
              <div className="portfolio-info">
                <h4>Amazon clone</h4>
                <p>React,Node js</p>
                <a
                  href="https://resplendent-profiterole-49501f.netlify.app/"
                  className="details-link"
                  title="More Details"
                >
                  <TiAttachmentOutline className="bx bx-link" />
                </a>
              </div>
            </div>
           
           

           
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio