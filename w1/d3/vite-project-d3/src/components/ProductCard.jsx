// ProductCard.jsx
export default function ProductCard({ product, onAddToCart }) {
  // product = { id, name, price }
  return (
    <article className="product">
      <h4>{product.name}</h4>
      <p>Rp {product.price}</p>
      <button onClick={() => onAddToCart(product)}>Tambah ke keranjang</button>
    </article>
  );
}