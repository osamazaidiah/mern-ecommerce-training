export const Row = ({ justifyContent, style, children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "8px",
        flexWrap: "wrap",
        justifyContent: justifyContent,
        alignItems: "center",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
