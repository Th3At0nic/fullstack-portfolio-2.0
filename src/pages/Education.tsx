import { Card, Col, Row, Typography } from "antd";
import { motion } from "framer-motion";
import { TEducation } from "../types/data.type";

const { Title, Text } = Typography;

const educationData: TEducation[] = [
  {
    degree: "B.E. in Computer Science and Engineering",
    institution: "Anna University",
    boardOrUniversity: "Public State University",
    location: "Chennai, India",
    duration: "2018 – 2021",
    type: "University",
  },
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "University Of Global Village",
    boardOrUniversity: "University Grants Commission (UGC)",
    location: "Barishal, Bangladesh",
    duration: "2022 – 2024",
    type: "University",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Satkhira Govt College",
    boardOrUniversity: "Board of Intermediate and Secondary Education",
    location: "Satkhira, Bangladesh",
    duration: "2015 – 2017",
    type: "College",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Satkhira Govt High School",
    boardOrUniversity: "Board of Intermediate and Secondary Education",
    location: "Satkhira, Bangladesh",
    duration: "2005 – 2015",
    type: "School",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const Education = () => {
  return (
    <div className="rounded-2xl max-w-7xl" style={{ margin: "auto" }}>
      <div style={{ margin: "10% 0 3%" }}>
        {/* Section Heading */}
        <motion.h2
          className="group relative text-3xl md:text-4xl font-bold text-center mb-10 cursor-pointer transition-all text-blue-800"
          whileHover={{ scale: 1.05 }}
        >
          Education Background
          <span className="absolute left-1/2 bottom-0 h-[4px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded" />
        </motion.h2>
      </div>
      <Row gutter={[24, 24]}>
        {educationData.map((edu, index) => (
          <Col xs={24} sm={24} md={12} lg={12} key={index}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <Card hoverable className="shadow-md rounded-2xl">
                <Title level={4}>{edu.degree}</Title>
                <Text strong>{edu.institution}</Text>
                <br />
                {edu.boardOrUniversity && (
                  <Text type="secondary">{edu.boardOrUniversity}</Text>
                )}
                <br />
                <Text>{edu.location}</Text>
                <br />
                <Text type="secondary">{edu.duration}</Text>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Education;
