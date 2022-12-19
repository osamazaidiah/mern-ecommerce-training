export const Row = ({ children, style }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "8px",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
