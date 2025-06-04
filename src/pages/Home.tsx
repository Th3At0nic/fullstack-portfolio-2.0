import { useLocation, useNavigate } from "react-router-dom";
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
import { useEffect } from "react";

const Home = () => {
  const { data: profileData, isLoading: isProfileDataLoading } =
    useGetProfileDataQuery(undefined);
  const location = useLocation();
  const scrollTo = location.state?.scrollTo;
  const navigate = useNavigate();

  useEffect(() => {
    if (scrollTo) {
      const section = document.getElementById(scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
          // Clear state
          navigate(".", { replace: true, state: {} });
        }, 100);
      }
    }
  }, [scrollTo, navigate]);

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
      <section id="/">
        <Hero profileData={profileData?.data} />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="experiences">
        <Experiences />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="blogs">
        <Blogs />
      </section>

      <section id="certificates">
        <Certificates />
      </section>

      {/* <section id="contact">
        <Contact />
      </section> */}
    </div>
  );
};

export default Home;
