export const OrderIsConfirmed = ({ secondsTimer }) => {
  return (
    <div style={{ padding: "8px", margin: "8px", border: "2px solid yellow" }}>
      <p>
        Congratulations! Your order has been confirmed. You will be redirected
        to our homepage in {secondsTimer} seconds...
      </p>
    </div>
  );
};
