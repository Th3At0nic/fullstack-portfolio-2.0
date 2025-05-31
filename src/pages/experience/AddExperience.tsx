import { Col, Button, Row, Divider } from "antd";
import PHForm from "../../components/form/PHForm";
import PHInput from "../../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAddExperienceMutation } from "../../redux/features/data/dataManagement.api";
import PHSelect from "../../components/form/PHSelect";
import { toast } from "sonner";
import { TError } from "../../types";

const employmentTypes = [
  "Full-time",
  "Part-time",
  "Internship",
  "Freelance",
  "Contract",
  "Remote",
];

const currentlyWorkingItems = [
  { name: "Yes", value: true },
  { name: "No", value: false },
];

const AddExperience = () => {
  const [addExperience] = useAddExperienceMutation();

  const employmentTypeOptions = employmentTypes?.map((item) => ({
    value: item,
    label: item,
  }));

  const currentlyWorkingOptions = currentlyWorkingItems?.map((item) => ({
    value: item.value,
    label: item.name,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const res = await addExperience(data);

    if (res?.data?.success) {
      toast.success("Experience Added Successfully", { duration: 4000 });
    } else if (res?.error) {
      toast.error((res?.error as TError).data.message, { duration: 4000 });
    } else toast.error("Something went wrong");
  };

  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit}>
          <Divider>Add Experience</Divider>
          <Row gutter={10}>
            <Col span={24} lg={12} md={12}>
              <PHInput type="text" name="title" label="Title" />
            </Col>
            <Col span={24} lg={12} md={12}>
              <PHInput type="text" name="company" label="Company" />
            </Col>
            <Col span={24} lg={8} md={12}>
              <PHInput type="text" name="location" label="Location" />
            </Col>
            <Col span={24} lg={8} md={12}>
              <PHSelect
                name="employmentType"
                label="Employment Type"
                options={employmentTypeOptions}
              />
            </Col>

            <Col span={24} lg={8} md={12}>
              <PHInput type="text" name="startDate" label="Start Date" />
            </Col>

            <Col span={24} lg={8} md={12}>
              <PHSelect
                name="currentlyWorking"
                label="Currently Working"
                options={currentlyWorkingOptions}
              />
            </Col>

            <Col span={24} lg={8} md={12}>
              <PHInput type="text" name="endDate" label="End Date" />
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

export default AddExperience;
