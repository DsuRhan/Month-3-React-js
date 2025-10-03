// ProductCard.jsx
function ProductCard({ productName, price, stock, isAvailable }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "10px",
      margin: "10px",
      maxWidth: "200px"
    }}>
      <h3>{productName}</h3>
      <p>Harga: Rp {price}</p>
      <p>Stok: {stock}</p>
      <p>Status: {isAvailable ? "Tersedia" : "Habis"}</p>
    </div>
  );
}

// default props
ProductCard.defaultProps = {
  productName: "Produk Tanpa Nama",
  price: 0,
  stock: 0,
  isAvailable: false
};

export default ProductCard;