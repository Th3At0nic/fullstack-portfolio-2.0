import { Col, Button, Row, Divider } from "antd";
import PHForm from "../../components/form/PHForm";
import PHInput from "../../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAddCertificateMutation } from "../../redux/features/data/dataManagement.api";
import PHSelect from "../../components/form/PHSelect";
import { toast } from "sonner";
import { TError } from "../../types";

export const courseDurations = [
  "1 week",
  "2 weeks",
  "3 weeks",
  "4 weeks",
  "1 month",
  "2 months",
  "3 months",
  "4 months",
  "5 months",
  "6 months",
  "7 months",
  "8 months",
  "9 months",
  "10 months",
  "11 months",
  "12 months",
];

const AddCourseCertificate = () => {
  const [addCertificate] = useAddCertificateMutation();

  const courseDurationsOptions = courseDurations?.map((item) => ({
    value: item,
    label: item,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const res = await addCertificate(data);

    if (res?.data?.success) {
      toast.success("Certificate Added Successfully", { duration: 4000 });
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
            <Col span={24} lg={24} md={12}>
              <PHInput type="text" name="title" label="Title" />
            </Col>
            <Col span={24} lg={8} md={12}>
              <PHInput type="text" name="platform" label="Platform" />
            </Col>
            <Col span={24} lg={8} md={12}>
              <PHSelect
                name="duration"
                label="Duration"
                options={courseDurationsOptions}
              />
            </Col>

            <Col span={24} lg={8} md={12}>
              <PHInput type="text" name="completedAt" label="Completed At" />
            </Col>

            <Col span={24} lg={24} md={12}>
              <PHInput
                type="text"
                name="certificateUrl"
                label="Certificate URL"
              />
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

export default AddCourseCertificate;
