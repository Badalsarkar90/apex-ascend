import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const MouseParallax = ({ children }: { children: React.ReactNode }) => {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useFrame(({ pointer }) => {
    mouse.current.x += (pointer.x * viewport.width * 0.08 - mouse.current.x) * 0.05;
    mouse.current.y += (pointer.y * viewport.height * 0.08 - mouse.current.y) * 0.05;
    if (groupRef.current) {
      groupRef.current.position.x = mouse.current.x;
      groupRef.current.position.y = mouse.current.y;
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

const FloatingOrb = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  const goldColor = useMemo(() => new THREE.Color("hsl(38, 80%, 55%)"), []);
  const darkGold = useMemo(() => new THREE.Color("hsl(38, 90%, 30%)"), []);

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.8, 4]} />
        <MeshDistortMaterial
          color={goldColor}
          emissive={darkGold}
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.9}
          distort={0.25}
          speed={2}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
};

const SmallOrbs = () => {
  const positions = useMemo(
    () =>
      Array.from({ length: 6 }, () => [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4 - 2,
      ] as [number, number, number]),
    []
  );

  return (
    <>
      {positions.map((pos, i) => (
        <Float key={i} speed={1 + i * 0.3} floatIntensity={0.5}>
          <mesh position={pos}>
            <sphereGeometry args={[0.08 + Math.random() * 0.1, 8, 8]} />
            <meshStandardMaterial
              color="hsl(38, 80%, 55%)"
              emissive="hsl(38, 80%, 55%)"
              emissiveIntensity={0.5}
              transparent
              opacity={0.4}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
};

const ThreeScene = () => (
  <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="hsl(38, 60%, 70%)" />
      <pointLight position={[-3, -2, 2]} intensity={0.4} color="hsl(38, 80%, 55%)" />
      <MouseParallax>
        <FloatingOrb />
        <SmallOrbs />
      </MouseParallax>
    </Canvas>
  </div>
);

export default ThreeScene;
