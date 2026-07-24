import { useGetProjectsQuery } from "../redux/features/data/dataManagement.api";
import { Card, Col, Row, Tag, Typography, Button, Space } from "antd";
import { GithubOutlined, GlobalOutlined, ApiOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { NoDataCard } from "../utils/NoDataCard";
import SectionSkeleton from "../components/SectionSkeleton";
import FeaturedProjectCard from "../components/projects/FeaturedProjectCard";

const { Title, Paragraph, Text } = Typography;

const Projects = () => {
  const { data: projectsData, isLoading } = useGetProjectsQuery(undefined);

  if (isLoading) {
    return (
      <SectionSkeleton titleWidthClassName="w-36">
        <Row gutter={[24, 24]}>
          {Array.from({ length: 3 }).map((_, index) => (
            <Col key={index} xs={24} sm={24} md={12} lg={8} xl={8}>
              <div className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white/70 shadow-sm dark:border-slate-700 dark:bg-slate-800/60">
                <div className="h-52 bg-slate-200/80 dark:bg-slate-700/60" />
                <div className="space-y-4 p-6">
                  <div className="h-6 w-3/4 rounded-full bg-slate-200/80 dark:bg-slate-700/60" />
                  <div className="space-y-2">
                    <div className="h-4 w-full rounded-full bg-slate-200/80 dark:bg-slate-700/60" />
                    <div className="h-4 w-5/6 rounded-full bg-slate-200/80 dark:bg-slate-700/60" />
                    <div className="h-4 w-2/3 rounded-full bg-slate-200/80 dark:bg-slate-700/60" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 3 }).map((__, tagIndex) => (
                      <div
                        key={tagIndex}
                        className="h-6 w-20 rounded-full bg-slate-200/80 dark:bg-slate-700/60"
                      />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="h-9 w-24 rounded-lg bg-slate-200/80 dark:bg-slate-700/60" />
                    <div className="h-9 w-28 rounded-lg bg-slate-200/80 dark:bg-slate-700/60" />
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </SectionSkeleton>
    );
  }

  if (!projectsData) {
    return (
      <NoDataCard
        title="No Project to Display"
        description="It seems there was an issue retrieving the projects data. Please try refreshing the page or check back later."
      />
    );
  }

  const projects = projectsData?.data || [];
  const featuredProjects = projects.filter((project) => project.featured);
  const standardProjects = projects.filter((project) => !project.featured);

  return (
    <div
      className="rounded-2xl max-w-7xl  text-gray-600"
      style={{ margin: "auto" }}
    >
      <div style={{ margin: "10% 0 3%" }}>
        {/* Section Heading */}
        <motion.h2
          className="group relative text-3xl md:text-4xl font-bold text-center mb-10 cursor-pointer transition-all text-blue-800"
          whileHover={{ scale: 1.05 }}
        >
          Projects
          <span className="absolute left-1/2 bottom-0 h-[4px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded" />
        </motion.h2>
      </div>

      {featuredProjects.length > 0 && (
        <Row gutter={[24, 24]}>
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project._id} project={project} />
          ))}
        </Row>
      )}

      {standardProjects.length > 0 && (
        <Row
          gutter={[24, 24]}
          style={{ marginTop: featuredProjects.length ? 24 : 0 }}
        >
          {standardProjects.map((project) => (
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

                {!project.isConfidential && (
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
                )}
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Projects;
