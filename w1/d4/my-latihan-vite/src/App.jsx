import ProfileBox from "./components/ProfileBox";
import CardWithCSS from "./components/CardWithCSS";
import Button from "./components/Button";
import AlertBox from "./components/AlertBox";
import ResponsiveBox from "./components/ResponsiveBox";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f9f9f9", background: "gray" }}>
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>🧭 Evaluasi Styling React</h2>

      <h3>1. Inline Styles</h3>
      <ProfileBox />

      <h3>2. CSS Classes</h3>
      <CardWithCSS />

      <h3>3. CSS Modules</h3>
      <Button label="Default Button" />
      <Button type="primary" label="Primary Button" />

      <h3>4. Dynamic Styling</h3>
      <AlertBox type="success" message="Berhasil disimpan!" />
      <AlertBox type="warning" message="Perhatikan input Anda!" />
      <AlertBox type="error" message="Gagal menyimpan data!" />

      <h3>5. Responsive Component</h3>
      <ResponsiveBox />
    </div></div>
  );
}

export default App;
