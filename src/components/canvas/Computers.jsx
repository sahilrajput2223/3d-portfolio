import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from "../Loader"

const Computers = () => {

  const coumputer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="green" />
      <pointLight intensity={1} color="white" />
      <spotLight position={[-20, 10, 5]} color="aqua" angle={0.75} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <primitive object={coumputer.scene} scale={0.7} position={[0, -3.5, -1.5]} rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  )
}


const ComputersCanvas = () => {
  return (
    <Canvas frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <React.Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers />
      </React.Suspense>

      <Preload all />
    </Canvas>
  );
}

export default ComputersCanvas