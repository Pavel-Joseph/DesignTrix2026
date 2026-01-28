"use client"; // If Next.js
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";

export default function ModelViewer() {
  const { scene } = useGLTF("/model.glb"); // Your GLTF model path (public folder)
  const controlsRef = useRef();
  const [enableControls, setEnableControls] = useState(false);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 w-64 h-96 z-50 pointer-events-none md:w-80 md:h-[500px] lg:right-8 lg:w-96 lg:h-[600px]">
      <Canvas
        className="pointer-events-auto" // Enables pointer only on canvas
        camera={{ position: [0, 0, 5] }}
        onPointerEnter={() => setEnableControls(true)}
        onPointerLeave={() => setEnableControls(false)}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <primitive object={scene} scale={1.5} /> {/* Adjust scale/position */}
        <OrbitControls
          ref={controlsRef}
          enabled={enableControls}
          enableZoom={false}
          enablePan={false}
          autoRotate={enableControls} // Gentle spin on hover
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
        />
      </Canvas>
    </div>
  );
}