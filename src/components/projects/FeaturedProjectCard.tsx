import { Button, Card, Collapse, Col, Space, Tag, Typography } from "antd";
import { ApiOutlined, GithubOutlined, GlobalOutlined, LockOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import type { TProject } from "../../types/data.type";

const { Title, Paragraph, Text } = Typography;

type FeaturedProjectCardProps = {
  project: TProject;
};

const FeaturedProjectCard = ({ project }: FeaturedProjectCardProps) => {
  return (
    <Col xs={24} lg={24}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <Card
          hoverable
          style={{ borderRadius: 16 }}
          bodyStyle={{ padding: 0 }}
          cover={
            <img
              alt={project.title}
              src={project.thumbnail}
              style={{ height: 360, objectFit: "cover" }}
            />
          }
          className="overflow-hidden"
        >
          <div className="space-y-6 p-6 md:p-8">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <Title level={3} style={{ marginBottom: 0 }}>
                  {project.title}
                </Title>
                {project.isConfidential && (
                  <Tag icon={<LockOutlined />} color="gold">
                    Confidential — NDA
                  </Tag>
                )}
              </div>

              {project.role && (
                <Text type="secondary" italic>
                  {project.role}
                </Text>
              )}
            </div>

            <Paragraph style={{ marginBottom: 0, fontSize: 16 }}>
              {project.description}
            </Paragraph>

            {project.impactMetrics?.length ? (
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {project.impactMetrics.map((metric, index) => (
                  <div
                    key={`${metric}-${index}`}
                    className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-700 dark:bg-slate-900/40"
                  >
                    <div className="text-2xl font-bold text-blue-800">
                      {metric}
                    </div>
                    <Text type="secondary" className="text-sm">
                      Impact metric
                    </Text>
                  </div>
                ))}
              </div>
            ) : null}

            {project.architectureNotes ? (
              <Collapse
                ghost
                items={[
                  {
                    key: "architecture",
                    label: "Architecture & Key Decisions",
                    children: (
                      <Paragraph className="mb-0">
                        {project.architectureNotes}
                      </Paragraph>
                    ),
                  },
                ]}
              />
            ) : null}

            <div>
              <Text strong>Technologies:</Text>
              <div style={{ marginTop: 8 }}>
                {project.technologies.map((tech: string) => (
                  <Tag color="blue" key={tech}>
                    {tech}
                  </Tag>
                ))}
              </div>
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
          </div>
        </Card>
      </motion.div>
    </Col>
  );
};

export default FeaturedProjectCard;