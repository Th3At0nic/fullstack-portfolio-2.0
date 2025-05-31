import { Col, Button, Row, Divider } from "antd";
import PHForm from "../../components/form/PHForm";
import PHInput from "../../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHTextArea from "../../components/form/PHTextarea";
import PHImageInput from "../../components/form/PHImageInput";
import { useAddProjectMutation } from "../../redux/features/data/dataManagement.api";
import PHSelect from "../../components/form/PHSelect";
import { toast } from "sonner";
import { TError } from "../../types";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Bootstrap",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "PostgreSQL",
  "Firebase",
  "Redux Toolkit",
  "Zod",
  "Prisma",
  "JWT",
];

const deploymentPlatforms = ["Vercel", "Netlify", "Render", "Railway", "Other"];

const AddProject = () => {
  const [addProject] = useAddProjectMutation();

  const technologyOptions = technologies?.map((item) => ({
    value: item,
    label: item,
  }));

  const deploymentPlatformOptions = deploymentPlatforms?.map((item) => ({
    value: item,
    label: item,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("file", data.thumbnail);
    //this is just for development testing purpose
    // console.log(Object.fromEntries(formData));

    const res = await addProject(formData);

    if (res?.data?.success) {
      toast.success("Project added Successfully", { duration: 4000 });
    } else if (res?.error) {
      toast.error((res?.error as TError).data.message, { duration: 4000 });
    } else toast.error("Something went wrong");
  };

  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit}>
          <Divider>Add Personal Project</Divider>
          <Row gutter={10}>
            <Col span={24} lg={10} md={12}>
              <PHInput type="text" name="title" label="Project Title" />
            </Col>
            <Col span={24} lg={14} md={12}>
              <PHTextArea
                name="description"
                rows={2}
                label="Short Description"
              />
            </Col>
            <Col span={24} lg={12} md={12}>
              <PHInput type="text" name="liveUrl" label="Live Frontend URL" />
            </Col>
            <Col span={24} lg={12} md={12}>
              <PHInput
                type="text"
                name="liveBackendUrl"
                label="Live Backend URL"
              />
            </Col>
            <Col span={24} lg={12} md={12}>
              <PHInput
                type="text"
                name="frontendRepo"
                label="Frontend Github Repository URL"
              />
            </Col>
            <Col span={24} lg={12} md={12}>
              <PHInput
                type="text"
                name="backendRepo"
                label="Backend Github Repository URL"
              />
            </Col>

            <Col span={24} lg={9} md={12}>
              <PHSelect
                name="technologies"
                label="Technologies"
                mode="multiple"
                options={technologyOptions}
              />
            </Col>
            <Col span={24} lg={6} md={12}>
              <PHSelect
                name="deploymentPlatform"
                label="Deployment Platform"
                options={deploymentPlatformOptions}
              />
            </Col>
            <Col span={24} lg={3} md={12}>
              <PHSelect
                name="featured"
                label="Featured"
                options={[
                  { label: "Yes", value: true },
                  { label: "No", value: false },
                ]}
              />
            </Col>
            <Col span={24} lg={6} md={12}>
              <PHImageInput name="thumbnail" label="Upload Project Thumbnail" />
            </Col>
          </Row>

          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default AddProject;
