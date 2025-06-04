import { useGetProfileDataQuery } from "../redux/features/data/dataManagement.api";
import LoadingSpinner from "../utils/LoadingSpinner";
import { NoDataCard } from "../utils/NoDataCard";
import Blogs from "./Blogs";
import Certificates from "./Certificates";
import Education from "./Education";
import Experiences from "./Experiences";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  const { data: profileData, isLoading: isProfileDataLoading } =
    useGetProfileDataQuery(undefined);

  if (isProfileDataLoading) {
    return <LoadingSpinner />;
  }

  if (!profileData) {
    return (
      <NoDataCard
        title="Unable to Load Data"
        description="Make sure you’re connected to the internet, or try refreshing the page."
      />
    );
  }

  return (
    <div>
      <section id="hero">
        <Hero profileData={profileData?.data} />
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
