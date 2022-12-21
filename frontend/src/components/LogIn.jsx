import { useContext, useState } from "react";
import axios from "axios";

import { Modal } from "./Modal";
import { InputField } from "./InputField";
import { CurrentUserContext } from "../context/CurrentUserProvider";
import { Column } from "./Column";

export const LogIn = () => {
  const [, , setToken] = useContext(CurrentUserContext);
  const [isVisible, setVisibility] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  if (!isVisible)
    return <button onClick={() => setVisibility(true)}>Log In</button>;

  return (
    <Modal setVisibility={setVisibility}>
      <InputField label="Email:" setValue={setEmail} value={email} />

      <InputField
        label="Password:"
        setValue={setPassword}
        value={password}
        type="password"
      />

      {errorMessage && (
        <Column>
          <p style={{ color: "red" }}>{errorMessage}</p>
        </Column>
      )}

      <button
        onClick={async () => {
          try {
            const response = await axios.post(
              "http://localhost:8080/api/sign-in",
              {
                email,
                password,
              }
            );

            const {
              data: { token },
            } = response;

            setToken(token);
          } catch (e) {
            setErrorMessage("Error signing in. Please try again.");
            console.log("Error", e);
          }
        }}
      >
        Log In
      </button>
    </Modal>
  );
};
