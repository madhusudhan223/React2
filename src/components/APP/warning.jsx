export default function Warning(props) {
  if (!props.warn) {
    return null;
  }
  return (
    <div
      className="warning"
      style={{ backgroundColor: "yellow", marginBottom: 5, fontSize: 20 }}
    >
      Warning
    </div>
  );
}
