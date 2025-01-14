import "./App.css";
import Banner from "./componentes/Banner";
import Stars from "./componentes/Stars";
import Mouse from "./componentes/MouseP";
import BlackHole from "./componentes/BlackHole";

function App() {
  return (
    <>
      <BlackHole />
      <Banner />
      <section className="proyectos h-screen justify-center bg-none mt-14 p-10">
        <h3 className="text-center text-white text-2xl">Proyectos</h3>
      </section>
    </>
  );
}

export default App;
