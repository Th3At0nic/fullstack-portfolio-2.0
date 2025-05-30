import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

const { TextArea } = Input;

type TPHTextAreaProps = {
  name: string;
  label?: string;
  disabled?: boolean;
  defaultValue?: string;
  rows?: number;
  placeholder?: string;
};

const PHTextArea = ({
  name,
  label,
  disabled = false,
  defaultValue = "",
  rows = 6,
  placeholder = "Write here...",
}: TPHTextAreaProps) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <Controller
        name={name}
        defaultValue={defaultValue}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label} validateStatus={error ? "error" : ""}>
            <TextArea
              {...field}
              id={name}
              rows={rows}
              placeholder={placeholder}
              disabled={disabled}
              style={{ width: "100%" }}
            />
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHTextArea;
