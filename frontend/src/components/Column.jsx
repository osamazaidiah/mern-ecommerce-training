export const Column = ({ justifyContent = "flex-start", style, children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        justifyContent: justifyContent,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
