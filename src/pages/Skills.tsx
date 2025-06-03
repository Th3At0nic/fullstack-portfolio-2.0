import { useGetSkillsQuery } from "../redux/features/data/dataManagement.api";
import { motion } from "framer-motion";
import { Spin } from "antd";

type TSkill = {
  _id: string;
  title: string;
  category: string;
  description: string;
  iconUrl: string;
};

const Skills = () => {
  const { data: skillsData, isLoading } = useGetSkillsQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Spin size="large" />
      </div>
    );
  }

  const groupedSkills: { [category: string]: TSkill[] } = {};

  skillsData?.data?.forEach((skill: TSkill) => {
    if (!groupedSkills[skill.category]) {
      groupedSkills[skill.category] = [];
    }
    groupedSkills[skill.category].push(skill);
  });

  return (
    <div className="rounded-2xl max-w-7xl" style={{ margin: "auto" }}>
      {/* Section Heading */}
      <motion.h2
        className="group relative text-3xl md:text-4xl font-bold text-center mb-10 cursor-pointer transition-all text-blue-800"
        whileHover={{ scale: 1.05 }}
      >
        Skills
        <span className="absolute left-1/2 bottom-0 h-[4px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded" />
      </motion.h2>

      <div style={{ margin: "2% 0" }}>
        {/* Categories */}
        {Object.entries(groupedSkills).map(([category, skills]) => (
          <div key={category} style={{ marginBottom: "3%" }}>
            <div>
              <motion.h3
                className="text-xl md:text-2xl lg:text-2xl font-semibold border-b border-blue-500 inline-block pb-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                {category}
              </motion.h3>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <motion.div
                  key={skill._id}
                  className="flex place-items-center rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer border border-transparent hover:border-blue-500"
                  style={{ padding: "15px" }}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={skill.iconUrl}
                    alt={skill.title}
                    className="w-8 h-8 sm:w-5 sm:h-8 md:w-12 md:h-12 lg:w-14 rounded-xl object-contain"
                  />
                  <div style={{ marginLeft: "15px" }}>
                    <h4 className="text-lg font-semibold">{skill.title}</h4>
                    <p className="text-sm text-gray-400">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
