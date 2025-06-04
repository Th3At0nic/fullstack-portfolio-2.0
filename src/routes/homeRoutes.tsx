import Blogs from "../pages/Blogs";
import Certificates from "../pages/Certificates";
import Contact from "../pages/Contact";
import Education from "../pages/Education";
import Experiences from "../pages/Experiences";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ReadBlog from "../pages/ReadBlog";
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
    path: "blogs/:blogId",
    element: <ReadBlog />,
  },
  {
    name: "Certificates",
    path: "certificates",
    element: <Certificates />,
  },
  {
    name: "Contact",
    path: "contact",
    element: <Contact />,
  },
];
