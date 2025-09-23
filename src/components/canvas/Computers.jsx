// ComputersCanvas.jsx
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <primitive
      object={computer.scene}
      scale={isMobile ? 0.75 : 0.75} // keep original size, zoom handled by camera
      position={isMobile ? [0, -1.5, 0] : [0, -3.25, -1.5]} // move up on mobile
      rotation={[-0.01, -0.2, -0.1]}
    />
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      className="w-full h-[400px] sm:h-[600px]" // ensure visible height on mobile
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{
        position: isMobile ? [30, 7, 15] : [20, 3, 5], // zoom out on mobile
        fov: isMobile ? 40 : 25, // increase fov for full model
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Lights */}
        <ambientLight intensity={1} />
        <hemisphereLight intensity={0.3} groundColor="black" />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1.5}
        />
        <pointLight intensity={1.2} />

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {/* Computer Model */}
        <Computers isMobile={isMobile} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
