
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Text3D, Center } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1.5, 100, 200]} scale={1.2}>
        <MeshDistortMaterial
          color="#00d4ff"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const FloatingCube = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.7;
    }
  });

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#ff6b6b" metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  );
};

const Hero3D = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="h-96 w-full relative">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d4ff" />
        
        <AnimatedSphere />
        <FloatingCube position={[-3, 2, 0]} />
        <FloatingCube position={[3, -2, 0]} />
        <FloatingCube position={[0, -3, -2]} />
      </Canvas>
      
      {hovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-4 left-4 text-white/70 text-sm"
        >
          Interactive 3D Elements
        </motion.div>
      )}
    </div>
  );
};

export default Hero3D;
