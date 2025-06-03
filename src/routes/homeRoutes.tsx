import Blogs from "../pages/Blogs";
import Certificates from "../pages/Certificates";
import Education from "../pages/Education";
import Experiences from "../pages/Experiences";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";

export const homePaths = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Skills",
    path: "skills",
    element: <Skills />,
  },
  {
    name: "Education",
    path: "education",
    element: <Education />,
  },
  {
    name: "Experiences",
    path: "experiences",
    element: <Experiences />,
  },
  {
    name: "Projects",
    path: "projects",
    element: <Projects />,
  },
  {
    name: "Blogs",
    path: "blogs",
    element: <Blogs />,
  },
  {
    name: "Certificates",
    path: "certificates",
    element: <Certificates />,
  },
];
