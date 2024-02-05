import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { FaStar } from "react-icons/fa";
import Banner from "../../components/Banner";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Hire from "../../components/Hire";
import Education from "../../components/Education";

const Home = () => {
  return (
    <div className="">
      <div name="/">
        <Navbar></Navbar>
        <div className="pt-20">
          <Banner></Banner>
          <Element name="about" className="element max-w-3xl mx-auto pt-10">
            <About></About>
          </Element>

          <Element name="education" className="element">
            <Education></Education>
          </Element>

          <Element name="skills" className="element">
            <Skills></Skills>
          </Element>

          <Element name="projects" className="element">
            <Projects></Projects>
          </Element>

          <Element name="contact" className="element">
            <Contact></Contact>
          </Element>

          <Element name="hire" className="element">
            <Hire></Hire>
          </Element>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
