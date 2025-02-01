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
        <h2 className="text-2xl text-white font-bold mt-10 mb-4">{nombre}</h2>
        <img
          className="rounded-3xl md:max-w-5xl m-auto"
          src={imagenes + "1.png"}
        ></img>
        <ul className="list-disc text-white gap-5 p-6 text-left m-auto">
          {descripcion.map((descripcion, index) => (
            <li key={index}>
              <p className="mb-4 text-gray-200">{descripcion}</p>
            </li>
          ))}
        </ul>
        <h3 className="ml-6 text-start font-semibold text-white mb-2">
          Tecnologías usadas:
        </h3>
        <ul className="list-none flex gap-5 pl-6 text-left">
          {techStack.map((tech, index) => (
            <li key={index}>
              <img
                className="techStcImg max-w-7 h-auto"
                src={`/skills/${tech}.svg`}
                alt={tech}
              ></img>
            </li>
          ))}
        </ul>
        <div className="flex flex-row-reverse justify-between">
          {enlace && (
            <a
              href={enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="block max-w-xl bg-gray-300 text-gray-950 text-center px-4 py-2 rounded mt-4 hover:bg-gray-400 transition"
            >
              Ver Proyecto
            </a>
          )}
          <button
            className="bg-red-300 text-gray-950 px-4 py-2 rounded mt-4 hover:bg-red-400 transition"
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
