import { Col, Button, Row, Divider } from "antd";
import PHForm from "../../components/form/PHForm";
import PHInput from "../../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { TError } from "../../types";
import PHImageInput from "../../components/form/PHImageInput";
import { useAddSkillMutation } from "../../redux/features/data/dataManagement.api";
import PHSelect from "../../components/form/PHSelect";

const skillCategories = [
  "Language",
  "Framework",
  "Library",
  "Tool",
  "Database",
  "Platform",
  "Other",
];

const AddSkill = () => {
  const [addSkill] = useAddSkillMutation();

  const skillCategoryOptions = skillCategories?.map((item) => ({
    value: item,
    label: item,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("file", data.iconUrl);
    //this is just for development testing purpose
    // console.log(Object.fromEntries(formData));

    const res = await addSkill(formData);

    if (res?.data?.success) {
      toast.success("Skill Added Successfully", { duration: 4000 });
    } else if (res?.error) {
      toast.error((res?.error as TError).data.message, { duration: 4000 });
    } else toast.error("Something went wrong");
  };

  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit}>
          <Divider>Add Resume</Divider>
          <Row gutter={10}>
            <Col span={24} lg={12} md={12}>
              <PHInput type="text" name="title" label="Skill Title" />
            </Col>
            <Col span={24} lg={12} md={12}>
              <PHInput
                type="text"
                name="description"
                label="Short Description"
              />
            </Col>
            <Col span={24} lg={12} md={12}>
              <PHSelect
                name="category"
                label="Skill Category"
                options={skillCategoryOptions}
              />
            </Col>
            <Col span={24} lg={12} md={12}>
              <PHImageInput name="iconUrl" label="Upload Skill Icon" />
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

export default AddSkill;
