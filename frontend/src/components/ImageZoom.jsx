import { Modal } from "./Modal";

export const ImageZoom = ({ src, title, alt, isVisible, setVisibility }) => {
  return (
    <>
      {isVisible && (
        <Modal
          children={
            <div
              style={{
                backgroundColor: "white",
              }}
            >
              <img
                title={title}
                alt={alt}
                style={{
                  height: "80vh",
                  maxWidth: "90vw",
                  backgroundColor: "white",
                }}
                src={src}
              />
            </div>
          }
          setVisibility={setVisibility}
        />
      )}
    </>
  );
};
