
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Grid } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
  const ref = useRef<THREE.Points>(null!);
  const sphere = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#06b6d4"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
};

const DataLines = () => {
  const lines = useMemo(() => {
    return Array.from({ length: 15 }).map(() => ({
      position: [Math.random() * 20 - 10, 0, Math.random() * 20 - 10] as [number, number, number],
      height: Math.random() * 10 + 5,
      speed: Math.random() * 0.02 + 0.01
    }));
  }, []);

  return (
    <group>
      {lines.map((line, i) => (
        <mesh key={i} position={[line.position[0], line.height / 2, line.position[2]]}>
          <boxGeometry args={[0.02, line.height, 0.02]} />
          <meshBasicMaterial color="#8b5cf6" transparent opacity={0.15} />
        </mesh>
      ))}
    </group>
  );
};

const BackgroundScene: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 bg-slate-950">
      <Canvas camera={{ position: [0, 5, 15], fov: 45 }}>
        <fog attach="fog" args={['#020617', 5, 30]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#06b6d4" />
        
        <ParticleField />
        <DataLines />
        
        <Grid 
          infiniteGrid 
          fadeDistance={30} 
          fadeStrength={5} 
          sectionSize={3} 
          sectionColor="#06b6d4" 
          cellColor="#1e293b" 
          position={[0, -2, 0]} 
        />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={[5, 2, -10]}>
            <octahedronGeometry args={[2]} />
            <meshStandardMaterial wireframe color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} />
          </mesh>
        </Float>
      </Canvas>
    </div>
  );
};

export default BackgroundScene;
