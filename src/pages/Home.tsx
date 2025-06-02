import Blogs from "./Blogs";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <section id="hero">
        <h1>Welcome to My Portfolio</h1>
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="blogs">
        <Blogs />
      </section>

      {/* <section id="contact">
        <Contact />
      </section> */}
    </div>
  );
};

export default Home;
