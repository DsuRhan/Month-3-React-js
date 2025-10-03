// ProductList.jsx (parent)
import { useState } from 'react';
import ProductCard from './ProductCard';

function ProductList({ items }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart(prev => [...prev, product]);
  }

  return (
    <div>
      <div className="grid">
        {items.map(item => (
          <ProductCard key={item.id} product={item} onAddToCart={addToCart} />
        ))}
      </div>
      <p>Keranjang: {cart.length} item</p>
    </div>
  );
}

export default ProductList;