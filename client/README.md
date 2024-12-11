# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh







// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import textureColor from "../assets/texture/code.png";
// import rough from "../assets/texture/roughness.jpg";
// import height2 from "../assets/texture/height.png";
// import normal2 from "../assets/texture/normal.png";
import { IoIosArrowDown } from "react-icons/io";
import gsap from "gsap";
import { useEffect } from "react";
import Homeexplore from "../components/Homeexplore";
import Discover from "../components/Discover";
import Signup from "../components/Signup";
import Aboutbleepgot from "../components/Aboutbleepgot";



const Home = () => {
  // const canRef = useRef(null); // Reference to the canvas element

  // useEffect(() => {
  //   const scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera(
  //     65,
  //     window.innerWidth / window.innerHeight,
  //     0.1,
  //     100
  //   );

  //   scene.background = new THREE.Color('transparent'); // Transparent background

  //   const loader = new THREE.TextureLoader();

  //   // Load textures with promises to ensure they're fully loaded before use
  //   const texturePromises = [
  //     loader.loadAsync(textureColor),
  //     loader.loadAsync(rough),
  //     loader.loadAsync(height2),
  //     loader.loadAsync(normal2),
  //   ];

  //   Promise.all(texturePromises).then(([color, roughness, height, normal]) => {
  //     const renderer = new THREE.WebGLRenderer({
  //       canvas: canRef.current,
  //       antialias: true,
  //     });
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //     renderer.setPixelRatio(window.devicePixelRatio);

  //     // Create the material with loaded textures
  //     const material = new THREE.MeshStandardMaterial({
  //       map: color,                // Diffuse (base) color map
  //       roughnessMap: roughness,    // Roughness map
  //       roughness: 0.5,            // Default roughness value
  //       displacementMap: height,    // Displacement map
  //       displacementScale: 0.02,    // Adjust displacement scale
  //       normalMap: normal,          // Normal map
  //     });

  //     // Create the geometry and mesh
  //     const geometry = new THREE.SphereGeometry(15, 32, 16); // Increased segment count for better texture detail
  //     const sphere = new THREE.Mesh(geometry, material);
  //     scene.add(sphere);

  //     // Set the camera position
  //     camera.position.z = 30; // Move camera further back to fit the sphere

  //     // Resize handler
  //     window.addEventListener("resize", () => {
  //       renderer.setSize(window.innerWidth, window.innerHeight);
  //       camera.aspect = window.innerWidth / window.innerHeight;
  //       camera.updateProjectionMatrix();
  //     });

  //     // Orbit controls
  //     const controls = new OrbitControls(camera, renderer.domElement);
  //     controls.enableDamping = true;
  //     controls.dampingFactor = 0.03;

  //     // Lighting
  //     const ambientLight = new THREE.AmbientLight(0x404040, 1); // Soft ambient light
  //     scene.add(ambientLight);

  //     const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Strong directional light
  //     directionalLight.position.set(5, 5, 5).normalize();
  //     scene.add(directionalLight);

  //     // Start the animation loop
  //     const clock = new THREE.Clock();
  //     function animate() {
  //       requestAnimationFrame(animate);
  //       controls.update(); // Update controls
  //       renderer.render(scene, camera);
  //     }

  //     animate(); // Start the animation loop

  //     // Cleanup on unmount
  //     return () => {
  //       renderer.dispose();
  //       window.removeEventListener("resize", () => {});
  //     };
  //   });

  // }, []); // Only run once after initial mount

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".centerPart", {
      background: "red",
      y: -50,
      repeat: -1,
      duration: 2,
      yoyo: true,
      ease: "expo.in",
    });
  }, []);

  return (
    <section className="heroPage w-screen relative">
     <div className="w-screen relative">
     <div className="w-screen h-[85vh] overflow-hidden flex flex-col">
        <h1 className="text-7xl text-center mt-20 font-semibold">Get your next</h1>

        <div className="heroImageShow w-screen mt-5 p-4">
          <h2 className="text-center text-7xl text-green-700">DIY idea</h2>

          <div className="imgArea flex justify-between items-center">
            <div className="leftPar flex gap-4 relative">
              <img
                src="https://storage.googleapis.com/pod_public/1300/161762.jpg"
                alt=""
                className="w-60 object-cover rounded-xl absolute left-[-200px]"
              />
              <div className="flex gap-3 relative left-[53px]">
                <img
                  src="https://storage.googleapis.com/pod_public/1300/161762.jpg"
                  alt=""
                  className="w-60 object-cover rounded-xl translate-y-[100px]"
                />
                <img
                  src="https://storage.googleapis.com/pod_public/1300/161762.jpg"
                  alt=""
                  className="w-60 object-cover rounded-xl translate-y-[200px]"
                />
              </div>
            </div>
            <div className="centerPart bg-green-900 w-14 h-14 flex items-center justify-center text-white rounded-full relative top-16 text-2xl">
              <IoIosArrowDown />
            </div>
            <div className="rightPart flex gap-4 relative">
              <img
                src="https://storage.googleapis.com/pod_public/1300/161762.jpg"
                alt=""
                className="w-60 object-cover rounded-xl absolute right-[-200px]"
              />
              <div className="flex gap-3 relative right-[53px]">
                <img
                  src="https://storage.googleapis.com/pod_public/1300/161762.jpg"
                  alt=""
                  className="w-60 object-cover rounded-xl translate-y-[200px]"
                />
                <img
                  src="https://storage.googleapis.com/pod_public/1300/161762.jpg"
                  alt=""
                  className="w-60 object-cover rounded-xl translate-y-[100px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="smokeLayer w-screen h-20 bottom-[0px] absolute"></div>
     </div>
      <Homeexplore />
      <Discover/>
      <Signup/>
      <Aboutbleepgot/>
    </section>
  );
};

export default Home;
