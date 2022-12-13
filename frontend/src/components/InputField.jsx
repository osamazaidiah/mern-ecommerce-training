import { Row } from "./Row";
export const InputField = ({ label, value, setValue, type = "text" }) => {
  return (
    <Row justifyContent="space-between">
      <label htmlFor="textInput" style={{ flex: 1 }}>
        {label}
      </label>
      <input
        name="textInput"
        style={{ flex: 3 }}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Row>
  );
};
