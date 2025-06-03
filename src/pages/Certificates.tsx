import { useGetCertificatesQuery } from "../redux/features/data/dataManagement.api";
import { Card, Col, Modal, Row, Typography, Button, Spin } from "antd";
import { useState } from "react";
import { motion } from "framer-motion";

const { Title, Text } = Typography;

const Certificates = () => {
  const { data: certificatesResponse, isLoading } =
    useGetCertificatesQuery(undefined);
  const certificates = certificatesResponse?.data || [];

  const [selectedCertificate, setSelectedCertificate] = useState<null | {
    certificateUrl: string;
    title: string;
  }>(null);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Spin size="large" />
      </div>
    );
  }

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
          Course & Certificates
          <span className="absolute left-1/2 bottom-0 h-[4px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded" />
        </motion.h2>
      </div>

      <Row gutter={[24, 24]} justify="center">
        {certificates.map((item) => (
          <Col xs={24} sm={12} md={8} lg={6} key={item._id}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="h-full"
            >
              <Card
                hoverable
                cover={
                  <img
                    alt={item.title}
                    src={item.certificateUrl}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                }
                className="rounded-2xl shadow-md h-full flex flex-col justify-between"
              >
                <Title level={4}>{item.title}</Title>
                <Text strong>Platform:</Text> <Text>{item.platform}</Text>
                <br />
                <Text strong>Duration:</Text> <Text>{item.duration}</Text>
                <br />
                <Text strong>Completed At:</Text>{" "}
                <Text>{item.completedAt}</Text>
                <br />
                <div className="text-center" style={{ marginTop: "2%" }}>
                  <Button
                    type="primary"
                    onClick={() =>
                      setSelectedCertificate({
                        certificateUrl: item.certificateUrl,
                        title: item.title,
                      })
                    }
                  >
                    View Certificate
                  </Button>
                </div>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      <Modal
        open={!!selectedCertificate}
        onCancel={() => setSelectedCertificate(null)}
        footer={null}
        width={1000}
        centered
      >
        <img
          src={selectedCertificate?.certificateUrl}
          alt={selectedCertificate?.title}
          style={{
            width: "100%",
            maxHeight: "80vh",
            objectFit: "contain",
          }}
          onContextMenu={(e) => e.preventDefault()} // disable right-click
        />
      </Modal>
    </div>
  );
};

export default Certificates;
