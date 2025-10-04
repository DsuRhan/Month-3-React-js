import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";
import Card from "./components/Card";
import Comment from "./components/Comment";


function App() {
  const user = {
    name: "Dio Brando",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0z69JfaS-TkdJR5LmF69HiNLELnpNe4dDfg&s"
  };
  return (
    <div>
      {/*Soal Ke 1 */}
      <Greeting name="Budi" />
      <Greeting name="Siti" />

      {/*Soal Ke 2 */}
        <ProductCard productName="Kopi Hitam" price={15000} stock={12} isAvailable />
      <ProductCard price={20000} /> {/* pakai default props */}
      {/** Soal Ke 3 */}
      <Card>
        <p>Teks sederhana di dalam Card</p>
      </Card>

      <Card>
        <img src="https://images.gamebanana.com/img/ico/sprays/668da5ac9a497.gif" alt="contoh" />
      </Card>

      <Card>
        <button>Klik saya</button>
      </Card>

      {/** Soal Ke 4 */}
      <Comment user={user} text="Za WAAARUDOOO!" />
      <Comment user={user} text="Toki wo tomare." />
    </div>
    
  );
}

export default App;
