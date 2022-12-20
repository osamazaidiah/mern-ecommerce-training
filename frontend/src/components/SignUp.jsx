import { useState } from "react";
import { Column } from "./Column";
import { InputField } from "./InputField";
import { Modal } from "./Modal";
import axios from "axios";
import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserProvider";

export const SignUp = () => {
  const [, , setToken] = useContext(CurrentUserContext);
  const [isVisible, setVisibility] = useState(false);
  const [firstName, setFirstName] = useState("Osama");
  const [lastName, setLastName] = useState("Z");
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123");
  const [confirmPassword, setConfirmPassword] = useState("123");
  const [location, setLocation] = useState("Jordan");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const emptyFormElements =
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !confirmPassword ||
    !location;

  const passwordsNoMatch = password !== confirmPassword;

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

      <InputField
        label="Confirm password:"
        setValue={setConfirmPassword}
        value={confirmPassword}
        type="password"
      />

      <InputField label="Location:" setValue={setLocation} value={location} />

      {isSubmitted && errorMessage && (
        <Column>
          <p style={{ color: "red" }}>{errorMessage}</p>
        </Column>
      )}

      <button
        onClick={async () => {
          setIsSubmitted(true);
          if (emptyFormElements)
            return setErrorMessage("All fields are required.");

          if (passwordsNoMatch) return setErrorMessage("Passwords must match.");

          try {
            const response = await axios.post(
              "http://localhost:8080/api/signup",
              { firstName, lastName, email, password, location }
            );

            const {
              data: { token },
            } = response;
            setToken(token);
          } catch (e) {
            if (e.response.status === 409)
              return setErrorMessage("Error signing up. Email already in use.");

            setErrorMessage("Error signing up. Please try again later.");
          }
        }}
      >
        Submit
      </button>
    </Modal>
  );
};
