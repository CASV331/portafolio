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
          <h2 className="mb-10">Habilidades</h2>
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
        <section className="projectSect mt-60 justify-center">
          <h2 className="text-white">Proyectos</h2>
          <div className="contenedorProjects mt-6 m-auto max-w-7xl gap-3 md:flex">
            {proyectos.map((project) => (
              <Projects
                key={project.id}
                nombre={project.nombre}
                techStack={project.techStack}
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
