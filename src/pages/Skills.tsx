import { useGetSkillsQuery } from "../redux/features/data/dataManagement.api";
import { motion } from "framer-motion";
import { NoDataCard } from "../utils/NoDataCard";
// import SectionSkeleton from "../components/SectionSkeleton";

type TSkill = {
  _id: string;
  title: string;
  category: string;
  description: string;
  iconUrl: string;
};

//this is the order of the categories to be displayed, if a category is not in this list, it will be displayed at the end
const CATEGORY_ORDER = [
  "Backend",
  "Database & ORM",
  "Caching & Async Processing",
  "Cloud & Infrastructure",
  "File Processing",
  "Payments & Integrations",
  "Frontend",
  "Tools & Platforms",
  "Languages",
  "Familiar With",
];

const sortCategories = (groupedSkills: { [category: string]: TSkill[] }) => {
  return Object.entries(groupedSkills).sort(([a], [b]) => {
    const indexA = CATEGORY_ORDER.indexOf(a);
    const indexB = CATEGORY_ORDER.indexOf(b);

    // If category not found, push it to the end
    const safeA = indexA === -1 ? 999 : indexA;
    const safeB = indexB === -1 ? 999 : indexB;

    return safeA - safeB;
  });
};

const Skills = () => {
  const { data: skillsData, isLoading } = useGetSkillsQuery(undefined);

  if (isLoading) {
    // return (
    //   <SectionSkeleton titleWidthClassName="w-32">
    //     <div className="space-y-8">
    //       {Array.from({ length: 3 }).map((_, categoryIndex) => (
    //         <div key={categoryIndex} className="space-y-4">
    //           <div className="h-6 w-48 rounded-full bg-slate-200/80 dark:bg-slate-700/60" />
    //           <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-1 md:gap-3">
    //             {Array.from({ length: 4 }).map((__, skillIndex) => (
    //               <div
    //                 key={skillIndex}
    //                 className="flex items-center rounded-xl border border-slate-200 bg-white/70 p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800/60"
    //               >
    //                 <div className="h-10 w-10 rounded-xl bg-slate-200/80 dark:bg-slate-700/60" />
    //                 <div className="ml-3 flex-1 space-y-2">
    //                   <div className="h-4 w-3/5 rounded-full bg-slate-200/80 dark:bg-slate-700/60" />
    //                   <div className="h-3 w-4/5 rounded-full bg-slate-200/80 dark:bg-slate-700/60" />
    //                 </div>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </SectionSkeleton>
    // );
  }

  if (!skillsData) {
    return (
      <NoDataCard
        title="No Skills to Display"
        description="It seems there was an issue retrieving the skills data. Please try refreshing the page or check back later."
      />
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
        {sortCategories(groupedSkills).map(([category, skills]) => (
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
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-1 md:gap-3">
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
                  <div style={{ marginLeft: "10px" }}>
                    <h4 className="text-lg sm:text-sm font-semibold">
                      {skill.title}
                    </h4>
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
