import { CalendarOutlined } from "@ant-design/icons";
import { useGetExperiencesQuery } from "../redux/features/data/dataManagement.api";
import { Card, Spin } from "antd";
import { motion } from "framer-motion";

const Experiences = () => {
  const { data: experienceData, isLoading } = useGetExperiencesQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <section className="rounded-2xl max-w-7xl" style={{ margin: "auto" }}>
      <div style={{ margin: "10% 0 3%" }}>
        {/* Section Heading */}
        <motion.h2
          className="group relative text-3xl md:text-4xl font-bold text-center mb-10 cursor-pointer transition-all text-blue-800"
          whileHover={{ scale: 1.05 }}
        >
          Experience
          <span className="absolute left-1/2 bottom-0 h-[4px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded" />
        </motion.h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {experienceData?.data?.map((exp, index: number) => (
          <motion.div
            key={exp._id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <CalendarOutlined size={18} /> {exp.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  {exp.company} — <span className="italic">{exp.location}</span>
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <CalendarOutlined size={16} />
                  {exp.startDate} -{" "}
                  {exp.currentlyWorking ? "Present" : exp.endDate}
                </p>
                <p className="text-xs text-gray-400">{exp.employmentType}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
