import { useState } from "react";
import Placeholder from "../assets/placeholder.jpg";
import { ImageZoom } from "./ImageZoom";

export const Image = ({
  src = Placeholder,
  title = "Image title",
  alt = "Image",
  style,
}) => {
  const [isVisible, setVisibility] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          placeItems: "center",
          border: "1px solid lightgray",
          minHeight: "200px",
          backgroundColor: "white",
          cursor: "pointer",
        }}
        onClick={() => setVisibility(true)}
      >
        <img
          title={title}
          alt={alt}
          style={{ width: "100%", ...style }}
          src={src}
        />
      </div>
      <ImageZoom
        src={src}
        alt={alt}
        title={title}
        isVisible={isVisible}
        setVisibility={setVisibility}
      />
    </>
  );
};
