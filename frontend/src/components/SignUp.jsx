import { useState } from "react";
import { InputField } from "./InputField";
import { Modal } from "./Modal";

export const SignUp = () => {
  const [isVisible, setVisibility] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");

  if (!isVisible)
    return <button onClick={() => setVisibility(true)}>Sign Up</button>;

  return (
    <Modal setVisibility={setVisibility}>
      <InputField
        label="First Name:"
        setValue={setFirstName}
        value={firstName}
      />

      <InputField label="Last Name:" setValue={setLastName} value={lastName} />

      <InputField label="Email:" setValue={setEmail} value={email} />

      <InputField
        label="Password:"
        setValue={setPassword}
        value={password}
        type="password"
      />

      <InputField label="Location:" setValue={setLocation} value={location} />

      <button>Submit</button>
    </Modal>
  );
};
