function Projects(db) {
  const { id, nombre, imagenes, techStack, descripcion, enlace } = db;

  return (
    <div className="projectContainer text-center max-w-2xl p-6">
      <h3 className="text-white font-bold mb-4 text-lg">{nombre}</h3>
      <img
        className="rounded-2xl"
        src={imagenes + "1.png"}
        alt="imagen principal del proyecto"
      />
    </div>
  );
}

export default Projects;
