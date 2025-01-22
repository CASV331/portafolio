import "./App.css";
import Banner from "./componentes/Banner";
import Stars from "./componentes/Stars";
import Mouse from "./componentes/MouseP";
import BlackHole from "./componentes/BlackHole";
import Skills from "./componentes/Skills";
import Projects from "./componentes/Projects";
import db from "./assets/db.json";

function App() {
  const { proyectos, skills } = db;
  return (
    <>
      <BlackHole />
      <Stars />
      <Mouse />
      <main className="content">
        <Banner />
        <section className="skillSect text-center">
          <h2 className="">Habilidades</h2>
          <div className="contenedorSkills m-auto">
            {skills.map((skill) => (
              <Skills
                key={skill.id}
                skill={skill.nombre}
                image={skill.imagen}
                bgColor={skill.bgColor}
              />
            ))}
          </div>
        </section>
        <section className="projectSect">
          <h2>Proyectos</h2>
          <div>
            {proyectos.map((project) => (
              <Projects
                key={project.id}
                nombre={project.nombre}
                techtStack={project.techStack}
                imagenes={project.imagenes}
                descripcion={project.descripcion}
                enlace={project.enlace}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
