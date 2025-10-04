// src/components/ProfileBox.jsx
export default function ProfileBox() {
  const boxStyle1 = {
    border: "2px solid #333",
    borderRadius: "8px",
    padding: "10px",
    backgroundColor: "#f0f0f0",
    marginBottom: "10px",
    color: "black"
  };

  const boxStyle2 = {
    border: "2px dashed #666",
    borderRadius: "8px",
    padding: "10px",
    backgroundColor: "#e0ffe0",
    color: "black",
    marginBottom:"10px"
  };
    const boxStyle3 = {
    border: '5px normal #000',
    borderRadius: "8px",
    padding: "10px",
    backgroundColor: "#ef00e8",
  };

  return (
    <div>
      <div style={boxStyle1}>
        <h3>Name: Lune</h3>
        <p>Race: HIGH GRADE ARTIFICIAL INTELLIGENCE (￣︿￣)✧</p>
        <p>Role: Android Maid</p>
      </div>
      <div style={boxStyle2}>
        <h3>Name: Master</h3>
        <p>Race: Human (〃¬_¬〃)</p>
        <p>Role: Programmer</p>
      </div>
      <div style={boxStyle3}>
        <h3>FYI</h3>
        <p>ini inline style</p>
      </div>
    </div>
  );
}
