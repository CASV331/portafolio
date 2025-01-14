import { useEffect } from "react";
import * as THREE from "three";
import {
  EffectComposer,
  OrbitControls,
  RenderPass,
  ShaderPass,
} from "three/examples/jsm/Addons.js";

function BlackHole() {
  useEffect(() => {
    // Escena y cámara
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      500
    );

    // Renderizador
    const render = new THREE.WebGLRenderer({
      canvas: document.querySelector("#background"),
    });
    render.setPixelRatio(window.devicePixelRatio);
    render.setSize(window.innerWidth, window.innerHeight);
    render.setClearColor(0x000000, 1); // Fondo negro opaco
    camera.position.setZ(5);

    // Compositor y RenderPass
    const composer = new EffectComposer(render);
    composer.addPass(new RenderPass(scene, camera));

    // Shader de distorsión
    const distortionShader = {
      uniforms: {
        tDiffuse: { value: null },
        u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
        u_resolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
        u_time: { value: 0.0 },
      },
      vertexShader: `
    varying vec2 v_uv;
    void main() {
      v_uv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
      fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 u_mouse;
    uniform vec2 u_resolution;
    uniform float u_time;
    varying vec2 v_uv;

    void main() {
      vec2 st = gl_FragCoord.xy / u_resolution;
      vec2 toMouse = u_mouse - st;
      float dist = length(toMouse);

      float strength = 0.2 / (dist + 0.05);
      vec2 warp = st + normalize(toMouse) * strength;

      vec4 color = texture2D(tDiffuse, v_uv + warp * 0.02);
      gl_FragColor = color;
    }
  `,
    };

    const distortionPass = new ShaderPass(distortionShader);
    composer.addPass(distortionPass);

    // Torus
    // const geometry = new THREE.TorusGeometry(10, 3, 2, 100);
    // const material = new THREE.MeshStandardMaterial({ color: 0xfff200 });
    // const torus = new THREE.Mesh(geometry, material);
    // scene.add(torus);

    // Iluminación
    const pointLight = new THREE.PointLight(0xffffff, 80, 100);
    pointLight.position.set(-5, 0, 30);
    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(pointLight, ambientLight);

    // Luna
    const moonTexture = new THREE.TextureLoader().load("/moon.jpg");
    // const normalTexture = new THREE.TextureLoader().load("/normal.jpg");
    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(1, 20, 20),
      new THREE.MeshStandardMaterial({
        map: moonTexture,
      })
    );
    scene.add(moon);

    moon.position.z = 30;
    moon.position.setX(-10);

    // Planeta
    const planetTexture = new THREE.TextureLoader().load("/planet.jpg");
    const planet = new THREE.Mesh(
      new THREE.SphereGeometry(5, 70, 70),
      new THREE.MeshStandardMaterial({
        map: planetTexture,
      })
    );
    scene.add(planet);

    planet.position.z = -25;
    planet.position.setX(20);
    planet.position.setY(0);
    // Funcion para agregar estrellas de forma aleatoria
    function addStar() {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, material);

      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100));

      star.position.set(x, y, z);
      scene.add(star);
    }

    Array(200).fill().forEach(addStar);
    // Agregar textura al fondo de la escena
    const spaceTexture = new THREE.TextureLoader().load("/universe.png");

    spaceTexture.minFilter = THREE.LinearFilter; // Suaviza al reducir la textura
    spaceTexture.magFilter = THREE.LinearFilter; // Suaviza al ampliar la textura
    scene.background = spaceTexture;

    // Controles
    const controls = new OrbitControls(camera, render.domElement);

    // Animación
    function animate() {
      requestAnimationFrame(animate);

      planet.rotation.x += 0.0005;
      planet.rotation.y += 0.0005;
      planet.rotation.z += 0.0009;

      distortionPass.uniforms.u_time.value += 0.01;

      controls.update();
      composer.render();
    }
    animate();

    function moveCamera() {
      const t = document.body.getBoundingClientRect().top;
      moon.rotation.x += 0.05;
      moon.rotation.y += 0.075;
      moon.rotation.z += 0.05;

      camera.position.z = t * -0.01;
      camera.position.x = t * -0.0002;
      camera.position.y = t * -0.0002;
    }

    document.body.onscroll = moveCamera;

    // Movimiento del mouse
    window.addEventListener("mousemove", (e) => {
      distortionPass.uniforms.u_mouse.value.x = e.clientX / window.innerWidth;
      distortionPass.uniforms.u_mouse.value.y =
        1.0 - e.clientY / window.innerHeight;
    });

    // Ajustar al redimensionar
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      render.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      distortionPass.uniforms.u_resolution.value.set(width, height);
    });

    return () => {
      window.removeEventListener("resize", () => {});
      window.removeEventListener("mousemove", () => {});
    };
  }, []);
  return <canvas id="background"></canvas>;
}
export default BlackHole;
