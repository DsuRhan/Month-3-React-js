import "./cardStyles.css";

export default function CardWithCSS() {
  return (
    <div>
      <div className="card primary">
        <h3>Kartu Utama</h3>
        <p>Ini kartu dengan tema biru muda.</p>
      </div>
      <div className="card secondary">
        <h3>Kartu Sekunder</h3>
        <p>Ini kartu dengan tema ungu muda.</p>
      </div>
    </div>
  );
}
