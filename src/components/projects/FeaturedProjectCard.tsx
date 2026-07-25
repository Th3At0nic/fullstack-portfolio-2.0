import { Button, Card, Collapse, Col, Space, Tag, Typography } from "antd";
import {
  ApiOutlined,
  GithubOutlined,
  GlobalOutlined,
  LockOutlined,
  PartitionOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import type { TProject } from "../../types/data.type";

const { Title, Paragraph, Text } = Typography;

const splitArchitectureNotes = (notes: string) => {
  return notes
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
};

const parseMetricText = (metric: string) => {
  const match = metric.match(/^((?:\d+(?:\.\d+)?%?)|(?:\d+\+))(.*)$/);

  if (!match) {
    return null;
  }

  const [, leading, trailing] = match;

  return {
    leading,
    trailing: trailing.trim(),
  };
};

const renderArchitectureBlocks = (notes: string) => {
  const paragraphs = splitArchitectureNotes(notes);

  const labelRegex = /^([A-Za-z0-9 &/]{2,40}):\s*(.*)$/;

  return (
    <div>
      {paragraphs.map((p, idx) => {
        const m = p.match(labelRegex);

        if (m) {
          const label = m[1].trim();
          const rest = m[2].trim();

          return (
            <div key={idx} className="mt-5">
              <div className="text-base font-semibold text-slate-900">
                {label}
              </div>
              {rest ? (
                <p className="mt-1 m-0 text-base leading-relaxed text-slate-700">
                  {rest}
                </p>
              ) : null}
            </div>
          );
        }

        return (
          <p
            key={idx}
            className="mt-3 m-0 text-base leading-relaxed text-slate-700"
          >
            {p}
          </p>
        );
      })}
    </div>
  );
};

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
              <Collapse
                ghost
                items={[
                  {
                    key: "impact",
                    label: (
                      <span className="flex items-center gap-2">
                        <TrophyOutlined /> Impact Metrics
                      </span>
                    ),
                    children: (
                      <div className="space-y-4 pt-2">
                        {project.impactMetrics.map((metric, index) => (
                          <div
                            key={`${metric}-${index}`}
                            className="border-l-2 border-blue-800 pl-4 py-1"
                          >
                            {(() => {
                              const parsedMetric = parseMetricText(metric);

                              if (!parsedMetric) {
                                return (
                                  <p className="m-0 text-base leading-relaxed text-slate-800">
                                    {metric}
                                  </p>
                                );
                              }

                              return (
                                <p className="m-0 text-base leading-relaxed text-slate-800">
                                  <span className="text-lg font-semibold">
                                    {parsedMetric.leading}
                                  </span>{" "}
                                  {parsedMetric.trailing || null}
                                </p>
                              );
                            })()}
                          </div>
                        ))}
                      </div>
                    ),
                  },
                ]}
              />
            ) : null}

            {project.architectureNotes ? (
              <Collapse
                ghost
                items={[
                  {
                    key: "architecture",
                    label: (
                      <span className="flex items-center gap-2">
                        <PartitionOutlined /> Architecture & Key Decisions
                      </span>
                    ),
                    children: renderArchitectureBlocks(
                      project.architectureNotes,
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
