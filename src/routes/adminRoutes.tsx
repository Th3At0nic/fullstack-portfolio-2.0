import AdminDashboard from "../pages/admin/AdminDashboard";
import AddBlog from "../pages/blog/AddBlog";
import AddCourseCertificate from "../pages/courseAndCertificate/AddCourseCertificate";
import AddExperience from "../pages/experience/AddExperience";
import AddProject from "../pages/project/AddProject";
import AddResume from "../pages/resume/AddResume";
import AddSkill from "../pages/skill/AddSkill";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Add Experience",
    path: "add-experience",
    element: <AddExperience />,
  },
  {
    name: "Add Project",
    path: "add-project",
    element: <AddProject />,
  },
  {
    name: "Add Blog",
    path: "add-blog",
    element: <AddBlog />,
  },
  {
    name: "Add Skill",
    path: "add-skill",
    element: <AddSkill />,
  },
  {
    name: "Add Resume",
    path: "add-resume",
    element: <AddResume />,
  },
  {
    name: "Add Certificate",
    path: "add-certificate",
    element: <AddCourseCertificate />,
  },
];
