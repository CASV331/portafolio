import "./App.css";
import Banner from "./componentes/Banner";
import Stars from "./componentes/Stars";
import Mouse from "./componentes/MouseP";
import BlackHole from "./componentes/BlackHole";

function App() {
  return (
    <>
      <BlackHole />
      <Stars />
      <main className="content">
        <Banner />
      </main>
    </>
  );
}

export default App;
