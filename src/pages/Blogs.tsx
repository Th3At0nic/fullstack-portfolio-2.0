import { useGetBlogQuery } from "../redux/features/data/dataManagement.api";
import { Card, Col, Row, Typography, Button, Tag, Spin } from "antd";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpenText } from "lucide-react";

const { Title, Paragraph } = Typography;

const Blogs = () => {
  const { data: blogsData, isLoading } = useGetBlogQuery(undefined);

  const blogs = blogsData?.data || [];

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
          Articles
          <span className="absolute left-1/2 bottom-0 h-[4px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded" />
        </motion.h2>
      </div>

      <Row gutter={[24, 24]} justify="center">
        {blogs.map((blog) => (
          <Col key={blog._id} xs={24} sm={24} md={12} lg={8} xl={6}>
            <Card
              hoverable
              cover={
                <img
                  alt="blog thumbnail"
                  src={blog.thumbnail}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              }
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: "12px",
              }}
            >
              <div>
                <Title level={4}>{blog.title}</Title>
                <Paragraph ellipsis={{ rows: 3 }}>
                  {blog.shortDescription}
                </Paragraph>
                <div style={{ margin: "10px 0" }}>
                  <Tag color="blue">{blog.category}</Tag>
                  <Tag color="volcano">{blog.author}</Tag>
                </div>
              </div>

              <div style={{ textAlign: "right", marginTop: "auto" }}>
                <Link to={`/blogs/${blog._id}`}>
                  <Button type="primary"><BookOpenText size={16}/>Read More</Button>
                </Link>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Blogs;
