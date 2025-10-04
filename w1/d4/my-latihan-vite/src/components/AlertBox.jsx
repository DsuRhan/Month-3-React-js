// src/components/AlertBox.jsx
export default function AlertBox({ type, message }) {
  const baseStyle = {
    padding: "12px 16px",
    borderRadius: "6px",
    marginBottom: "10px",
    color: "white",
  };

  const alertStyle = {
    success: { backgroundColor: "#28a745" },
    warning: { backgroundColor: "#ffc107", color: "#333" },
    error: { backgroundColor: "#dc3545" },
  };

  return (
    <div style={{ ...baseStyle, ...alertStyle[type] }}>
      <strong>{type.toUpperCase()}:</strong> {message}
    </div>
  );
}
