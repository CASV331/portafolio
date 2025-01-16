import "./App.css";
import Banner from "./componentes/Banner";
import Stars from "./componentes/Stars";
import Mouse from "./componentes/MouseP";
import BlackHole from "./componentes/BlackHole";
import Skills from "./componentes/Skills";

function App() {
  return (
    <>
      <BlackHole />
      <Stars />
      <Mouse />
      <main className="content">
        <Banner />
        <Skills />
      </main>
    </>
  );
}

export default App;
