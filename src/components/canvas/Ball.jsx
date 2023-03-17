import React from 'react'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import CanvasLoader from "../Loader"

const Ball = (props) => {
  const [decal] = useTexture([props.icon])
  return (
    <Float speed={1.75} rotationIntensity={0.25} floatIntensity={2.0}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.0}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} map={decal} rotation={[2 * Math.PI, 0, 6.25]} flatShading />
      </mesh>
    </Float>
  );
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" shadows gl={{ preserveDrawingBuffer: true }}>
      <React.Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball icon={icon} />
      </React.Suspense>
      <Preload all />
    </Canvas>
  );
}

export default BallCanvas