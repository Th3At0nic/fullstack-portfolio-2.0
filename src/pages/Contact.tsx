import {
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="rounded-2xl max-w-4xl" style={{ margin: "auto" }}>
      <motion.h3 className="group relative text-xl font-bold text-center cursor-pointer transition-all text-gray-400">
        Have a project in mind?
      </motion.h3>

      <motion.h2
        className="group relative text-2xl md:text-4xl text-center cursor-pointer transition-all my-8 hover:underline hover:decoration-gray-400 text-gray-400"
        whileHover={{ scale: 1.02 }}
        style={{ margin: "2% 0" }}
      >
        <a
          href="mailto:islammdrahatul@gmail.com"
          className="font-bold break-words"
          style={{ color: "#9CA3AF" }}
        >
          islammdrahatul@gmail.com
        </a>
      </motion.h2>

      <div className="flex justify-center" style={{ margin: "2%" }}>
        <motion.div className="flex gap-5">
          <a
            href="https://www.facebook.com/th3pri/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#9CA3AF" }}
          >
            <FacebookOutlined style={{ fontSize: "25px" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/mdrahatulislam/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#9CA3AF" }}
          >
            <LinkedinOutlined style={{ fontSize: "25px" }} />
          </a>
          <a
            href="https://github.com/Th3At0nic"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#9CA3AF" }}
          >
            <GithubOutlined style={{ fontSize: "25px" }} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
