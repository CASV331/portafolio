import { useEffect, useState } from "react";
import Modal from "./Modal";

function Projects({ nombre, rutaImg, techStack, descripcion, enlace }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState([]);

  // UseEffect to load the images
  useEffect(() => {
    const checkImageExist = (url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
      });
    };

    const loadImages = async () => {
      const validImages = [];
      let count = 1;
      let exist = true;

      while (exist && count <= 10) {
        const imgUrl = `${rutaImg}${count}.png`;
        const imageExist = await checkImageExist(imgUrl);

        if (imageExist) {
          validImages.push(imgUrl);
          count++;
        } else {
          exist = false;
        }
      }
      setImages(validImages);
      console.log("Imagenes validas", validImages);
    };

    loadImages();
  }, [rutaImg]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  return (
    <>
      {/*Contenedor del proyecto*/}
      <div
        className="projectContainer text-center max-w-lg p-6 cursor-pointer transform transition-transform duration-300 hover:scale-110"
        onClick={() => setModalOpen(true)}
      >
        <h3 className="text-white font-bold mb-4 text-md md:text-lg">
          {nombre}
        </h3>
        <img
          className="rounded-2xl"
          src={rutaImg + "1.png"}
          alt={`imagen principal del proyecto ${nombre}`}
        />
      </div>
      {/* Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-2xl text-white font-bold mt-10 mb-4">{nombre}</h2>
        {/* Carrusel */}
        <div id="default-carousel" className="relative md:max-w-6xl m-auto">
          <div className="relative h-[28rem] overflow-visible rounded-lg">
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="w-full h-full flex items-center justify-center p-4">
                  <img
                    className="w-auto h-full md:max-w-5xl md:object-scale-up object-contain transform transition-transform duration-300 hover:scale-105"
                    src={img}
                    alt={`Imagen ${index + 1} del proyecto ${nombre}`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation butttons */}

          {images.length > 1 && (
            <>
              {/* Prev button */}
              <button
                type="button"
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/30 text-white p-4 text-2xl rounded-full hover:bg-black/50"
                onClick={prevSlide}
              >
                ‹
              </button>
              {/* Next button */}
              <button
                type="button"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/30 text-white p-4 text-2xl rounded-full hover:bg-black/50"
                onClick={nextSlide}
              >
                ›
              </button>

              {/* Position indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === currentSlide
                        ? "bg-white w-4 h-4"
                        : "bg-gray-500"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
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
