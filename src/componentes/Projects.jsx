import { useState } from "react";
import Modal from "./Modal";
function Projects({ nombre, imagenes, techStack, descripcion, enlace }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      {/*Contenedor del proyecto*/}
      <div
        className="projectContainer text-center max-w-lg p-6 cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        <h3 className="text-white font-bold mb-4 text-md md:text-lg">
          {nombre}
        </h3>
        <img
          className="rounded-2xl"
          src={imagenes + "1.png"}
          alt={`imagen principal del proyecto ${nombre}`}
        />
      </div>
      {/* Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl text-black font-bold mb-4">{nombre}</h2>
        <img src={imagenes + "1.png"}></img>
        <p className="mb-4 text-gray-200">{descripcion}</p>
        <h3 className="font-semibold text-white mb-2">Tecnologías usadas:</h3>
        <ul className="list-none flex gap-5 pl-6 text-left">
          {techStack.map((tech, index) => (
            <li key={index}>
              <img
                className="max-w-7 h-auto"
                src={`/skills/${tech}.svg`}
                alt={tech}
              ></img>
            </li>
          ))}
        </ul>
        <div className="flex flex-row-reverse justify-between">
          <a
            href={enlace}
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-xl bg-black text-white text-center px-4 py-2 rounded mt-4 hover:bg-gray-700 transition"
          >
            Ver Proyecto
          </a>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-600 transition"
            onClick={() => setModalOpen(false)} // Cierra el modal
          >
            Cerrar
          </button>
        </div>
      </Modal>
    </>
  );
}

export default Projects;
