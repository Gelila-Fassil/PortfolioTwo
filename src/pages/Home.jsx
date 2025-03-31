import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import About from '../components/About/About'
import Services from "../components/Services/Services"
import Portfolio from "../components/Portfolio/Portfolio"
import Contacts from "../components/Contact/Contacts"
import Footer from "../components/Footer/Footer"
import CVAnimation from "../components/CVAnimation/CVAnimation"


const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        {/* <CVAnimation/> */}
        <About/>
        <Services/>
        <Portfolio/>
        <Contacts/>
        <Footer/>
    </div>
  )
}

export default Home