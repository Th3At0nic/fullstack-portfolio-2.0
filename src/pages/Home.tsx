import Blogs from "./Blogs";
import Certificates from "./Certificates";
import Education from "./Education";
import Experiences from "./Experiences";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="experience">
        <Experiences />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="blogs">
        <Blogs />
      </section>

      <section id="courses">
        <Certificates />
      </section>

      {/* <section id="contact">
        <Contact />
      </section> */}
    </div>
  );
};

export default Home;
