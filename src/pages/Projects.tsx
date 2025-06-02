import { useGetProjectsQuery } from "../redux/features/data/dataManagement.api";
import { Card, Col, Row, Tag, Typography, Button, Space } from "antd";
import { GithubOutlined, GlobalOutlined, ApiOutlined } from "@ant-design/icons";
import { TProject } from "../types/data.type";
import { motion } from "framer-motion";

const { Title, Paragraph, Text } = Typography;

const Projects = () => {
  const { data: projectsData } = useGetProjectsQuery(undefined);

  const projects = projectsData?.data || [];

  return (
    <div
      className="rounded-2xl max-w-7xl  text-gray-600"
      style={{ margin: "auto" }}
    >
      <div style={{margin: "10% 0 3%"}}>
        {/* Section Heading */}
        <motion.h2
          className="group relative text-3xl md:text-4xl font-bold text-center mb-10 cursor-pointer transition-all text-blue-800"
          whileHover={{ scale: 1.05 }}
        >
          Projects
          <span className="absolute left-1/2 bottom-0 h-[4px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded" />
        </motion.h2>
      </div>

      <Row gutter={[24, 24]}>
        {projects.map((project: TProject) => (
          <Col key={project._id} xs={24} sm={24} md={12} lg={8} xl={8}>
            <Card
              hoverable
              cover={
                <img
                  alt={project.title}
                  src={project.thumbnail}
                  style={{
                    height: 200,
                    objectFit: "cover",
                  }}
                />
              }
              style={{ borderRadius: 12 }}
            >
              <Title level={4}>{project.title}</Title>

              <Paragraph ellipsis={{ rows: 3, expandable: true }}>
                {project.description}
              </Paragraph>

              <div style={{ marginBottom: "12px" }}>
                <Text strong>Technologies:</Text>
                <div style={{ marginTop: 8 }}>
                  {project.technologies.map((tech: string) => (
                    <Tag color="blue" key={tech}>
                      {tech}
                    </Tag>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: "12px" }}>
                <Text strong>Deployed On:</Text>{" "}
                <Tag color="green">{project.deploymentPlatform}</Tag>
              </div>

              <Space wrap size="small">
                {project.liveUrl && (
                  <Button
                    icon={<GlobalOutlined />}
                    type="primary"
                    href={project.liveUrl}
                    target="_blank"
                  >
                    Live Site
                  </Button>
                )}
                {project.frontendRepo && (
                  <Button
                    icon={<GithubOutlined />}
                    href={project.frontendRepo}
                    target="_blank"
                  >
                    Frontend Code
                  </Button>
                )}
                {project.backendRepo && (
                  <Button
                    icon={<GithubOutlined />}
                    href={project.backendRepo}
                    target="_blank"
                  >
                    Backend Code
                  </Button>
                )}
                {project.liveBackendUrl && (
                  <Button
                    icon={<ApiOutlined />}
                    href={project.liveBackendUrl}
                    target="_blank"
                  >
                    Backend URL
                  </Button>
                )}
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
