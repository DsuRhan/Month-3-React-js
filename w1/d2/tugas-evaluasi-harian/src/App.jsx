import ProfileCard from "./components/ProfileCard";
import "./App.css";

// Section 2: JSX Expressions
function MathAndStringDemo() {
  const price = 100000;
  const discount = 0.2;
  const finalPrice = price - price * discount;

  const username = "Master";

  function greet(name) {
    return `Selamat datang, ${name}!`;
  }

  return (
    <section className="task-section">
      <div className="card-container">
        <h2>Section 2: JSX Expressions</h2>
        <p>Harga asli: Rp {price}</p>
        <p>Diskon: {discount * 100}%</p>
        <p>Harga setelah diskon: Rp {finalPrice}</p>
        <p>{greet(username)}</p>
		<p>(Capek ngurus soal 1, soal 2 dan seterusnya simpel aja)</p>
      </div>
    </section>
  );
}

// Section 3: Conditional Rendering
function ConditionalRenderingDemo({ isLoggedIn }) {
  const unreadMessages = 3;

  return (
    <section className="task-section">
      <div className="card-container">
        <h2>Section 3: Conditional Rendering</h2>
        <p>{isLoggedIn ? "Halo, Anda sudah login." : "Silakan login dulu."}</p>
        {unreadMessages > 0 && (
          <p>Anda punya {unreadMessages} pesan belum dibaca.</p>
        )}
      </div>
    </section>
  );
}

// Section 4: Rendering List
function ListRenderingDemo() {
  const fruits = ["Apel", "Jeruk", "Mangga", "Anggur"];

  return (
    <section className="task-section">
      <div className="card-container">
        <h2>Section 4: List Rendering</h2>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      {/* Section 1: Profile Cards */}
      <section className="task-section">
        <ProfileCard
          character="mon3tr"
          name="Mon3tr"
          photo="https://arknights.wiki.gg/images/Mon3tr_icon.png?986adf"
          bio="Mon3tr is profoundly knowledgeable in life sciences, Oripathy treatment, history and genealogy, and many other fields."
          skills={[
            "Stratagem: Hyperpressurized Link",
            "Stratagem: Overload",
            "Stratagem: Meltdown",
          ]}
        />

        <ProfileCard
          character="texas"
          name="Texas the Omertosa"
          photo="https://arknights.wiki.gg/images/Texas_the_Omertosa_icon.png?f0122e"
          bio="Penguin Logistics employee, last surviving member of the Texas family, excellent solo combat ability."
          skills={[
            "Silent Drizzle",
            "Unrelenting Downpour",
            "Torrential Sword Rain",
          ]}
        />

        <ProfileCard
          character="lappland"
          name="Lappland the Decadenza"
          photo="https://arknights.wiki.gg/images/Lappland_the_Decadenza_icon.png?3660b4"
          bio="Lappland, unemployed. The only daughter of Alberto Saluzzo, patriarch of the Siracusan Famiglia Saluzzo."
          skills={[
            "Lament of the Apathetic",
            "Hurricane Chase",
            "Finale: Catastrofe",
          ]}
        />

        <ProfileCard
          character="surtr"
          name="Surtr"
          photo="https://arknights.wiki.gg/images/Surtr_Skin_1_icon.png?b0b90b"
          bio="Surtr is a mysterious Sarkaz girl who suffers from amnesia, perhaps due to her Oripathy. Her condition is rarely seen even among Infected."
          skills={["Laevatain", "Molten Giant", "Twilight"]}
        />

        <ProfileCard
          character="dio"
          name="Dio Brando"
          photo="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/01/2025/03/18/JOJOS-BIZARRE-ADVENTURE-DIO-1-1-44801206.jpg"
          bio='"Za WARUDO!.... Toki wo tomare!"'
          skills={[
            "Za Warudo",
            "Charisma",
            "Muda Muda Muda Muda Muda Muda Muda!!!",
          ]}
        />
      </section>

      {/* Section 2 */}
      <MathAndStringDemo />

      {/* Section 3 */}
      <ConditionalRenderingDemo isLoggedIn={true} />

      {/* Section 4 */}
      <ListRenderingDemo />
    </>
  );
}

export default App;
