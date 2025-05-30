import { Col, Button, Row, Divider } from "antd";
import PHForm from "../../components/form/PHForm";
import PHInput from "../../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHTextArea from "../../components/form/PHTextarea";
import PHImageInput from "../../components/form/PHImageInput";
import { useCreateBlogMutation } from "../../redux/features/data/dataManagement.api";
import PHSelect from "../../components/form/PHSelect";
import { toast } from "sonner";
import { TError } from "../../types";

const blogCategories = [
  "Web Development",
  "Programming",
  "JavaScript",
  "TypeScript",
  "React",
  "NextJS",
  "Backend",
  "Full Stack",
  "Database",
  "Career",
  "Tips & Tricks",
  "Personal Projects",
  "Open Source",
  "Tutorials",
  "Life as a Developer",
];

const AddBlog = () => {
  const [createBlog] = useCreateBlogMutation();

  const categoryOptions = blogCategories?.map((item) => ({
    value: item,
    label: item,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("file", data.thumbnail);
    //this is just for development testing purpose
    // console.log(Object.fromEntries(formData));

    const res = await createBlog(formData);

    if (res?.data?.success) {
      toast.success("Blog Post Successful", { duration: 4000 });
    } else if (res?.error) {
      toast.error((res?.error as TError).data.message, { duration: 4000 });
    } else toast.error("Something went wrong");
  };

  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit}>
          <Divider>Blog</Divider>
          <Row gutter={10}>
            <Col span={24} lg={8} md={12}>
              <PHInput type="text" name="title" label="Title" />
            </Col>
            <Col span={24} lg={6} md={12}>
              <PHInput type="text" name="author" label="Author" />
            </Col>
            <Col span={24} lg={5} md={12}>
              <PHSelect
                name="category"
                label="Category"
                options={categoryOptions}
              />
            </Col>
            <Col span={24} lg={5} md={12}>
              <PHImageInput name="thumbnail" label="Upload Blog Thumbnail" />
            </Col>
            <Col span={24} lg={8} md={12}>
              <PHTextArea
                name="shortDescription"
                rows={16}
                label="Short Description"
              />
            </Col>
            <Col span={24} lg={16} md={12}>
              <PHTextArea name="content" rows={16} label="Content" />
            </Col>
          </Row>

          <Button type="primary" htmlType="submit" block>
            Post
          </Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default AddBlog;
