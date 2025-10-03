// Card.jsx
export default function Card({ children }) {
  return (
    <div style={{
      border: "2px solid #333",
      borderRadius: "10px",
      padding: "15px",
      margin: "10px",
      backgroundColor: "#f9f9f9"
    }}>
      {children}
    </div>
  );
}