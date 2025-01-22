import "../App.css";
export default function Header() {
  return (
    <>
      <header className="flex justify-end gap-2">
        {/* <a
            target="_blank"
            href="https://www.linkedin.com/in/cesar-arturo-sandoval-velasco-719bb02a2/"
            className="p-3"
          >
            <svg
              className="w-8 h-8 md:w-10 md:h-10 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                clipRule="evenodd"
              />
              <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
            </svg>
          </a> */}
        <a target="_blak" href="https://github.com/CASV331" className="p-3">
          <svg
            className="w-10 h-10 md:w-14 md:h-14 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </header>
      <section className="banner">
        <div className=" max-w-6xl mx-auto mt-2 md:mt-10 p-5 md:p-10">
          <h1 className="md:flex text-center text-white md:justify-center text-5xl md:text-6xl">
            César Sandoval {""}
            <div className="separador ml-2 bg-white w-1" />
            <span className="font-bold px-2 web">Desarrollador web</span>
          </h1>
          <hr className="bg-white w-full h-0.5 md:h-1 mt-5" />
          <h2 className="mt-40 text-3xl md:text-4xl">Acerca de mi</h2>
          <p className="text-white text-lg text-center m-auto max-w-4xl md:text-2xl">
            Soy un desarrollador web con más de un año de experiencia en diseño
            web y programación. He trabajado con tecnologías como HTML, CSS,
            JavaScript, Tailwind, Bootstrap y React para crear interfaces de
            usuario eficientes y atractivas, he implementado Nodejs en algunos
            de mis proyectos para manejo de paquetes y conexiones backend.
            Además, estoy constantemente ampliando mis conocimientos por lo que
            he desarrollado proyectos con PHP y he utilizado plataformas como
            Vercel, Render y Netlify. Busco oportunidades para aplicar mis
            habilidades en un entorno colaborativo, donde pueda crecer como
            desarrollador y contribuir al éxito del equipo.
          </p>
        </div>
      </section>
    </>
  );
}
