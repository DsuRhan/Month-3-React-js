import Greeting from "./components/Greeting";
import Welcome from "./components/Welcome";
import ProductList from "./components/ProductList";

const products = [
  { id: 1, name: "Produk A", price: 10000 },
  { id: 2, name: "Produk B", price: 20000 },
  { id: 3, name: "Produk C", price: 30000 },
];

// Main App Component
function App() {
  return (
    <div>
      <Greeting />
      <Welcome name="Rhan" />
      <ProductList items={products} />
    </div>
  );
}

export default App;