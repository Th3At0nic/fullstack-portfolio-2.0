import { Col, Button, Row, Divider } from "antd";
import PHForm from "../../components/form/PHForm";
import PHInput from "../../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { TError } from "../../types";
import { useAddResumeMutation } from "../../redux/features/data/dataManagement.api";

const AddResume = () => {
  const [addResume] = useAddResumeMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const res = await addResume(data);

    if (res?.data?.success) {
      toast.success("Resume Added Successfully", { duration: 4000 });
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
            <Col span={24} lg={24} md={12}>
              <PHInput
                type="text"
                name="resumeUrl"
                label="Resume URL (Google Drive Link)"
              />
            </Col>
          </Row>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default AddResume;
