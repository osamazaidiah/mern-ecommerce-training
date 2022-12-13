import { useState } from "react";
import { Column } from "./Column";
import { Modal } from "./Modal";
import { Row } from "./Row";

export const ConfirmModal = ({ setIsConfirmed, label }) => {
  const [isVisible, setVisibility] = useState(false);

  if (!isVisible)
    return <button onClick={() => setVisibility(true)}>{label}</button>;

  return (
    <>
      <Modal setVisibility={setVisibility}>
        <Column>
          <p>Are you Sure?</p>
          <Row>
            <button
              onClick={() => {
                setIsConfirmed(true);
                setVisibility(false);
              }}
            >
              Confirm
            </button>
            <button onClick={() => setVisibility(false)}>Cancel</button>
          </Row>
        </Column>
      </Modal>
    </>
  );
};
