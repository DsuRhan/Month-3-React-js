// src/Tugas.jsx

// Contoh Tugas 1: Membuat profile card
function Tugas1() {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", width: "250px" }}>
      <h2>Tugas 1 - Profile Card</h2>
      <p>Halo, ini contoh profile sederhana.</p>
    </div>
  );
}

// Contoh Tugas 2: Daftar list rendering
function Tugas2() {
  const items = ["React", "JSX", "Virtual DOM"];
  return (
    <div>
      <h2>Tugas 2 - List Rendering</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// Contoh Tugas 3: Styling inline
function Tugas3() {
  return (
    <div style={{ backgroundColor: "#f2f2f2", padding: "1rem", borderRadius: "8px" }}>
      <h2 style={{ color: "blue" }}>Tugas 3 - Inline Styling</h2>
      <p>Belajar memberi style langsung pada elemen JSX.</p>
    </div>
  );
}

// Export semua tugas
export { Tugas1, Tugas2, Tugas3 };
