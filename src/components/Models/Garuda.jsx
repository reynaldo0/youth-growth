// Garuda.js
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Garuda(props) {
  const { nodes, materials } = useGLTF("/models/garuda.glb");
  
  // Create a reference to the group
  const modelRef = useRef();
  
  // Automatically rotate the model using useFrame
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Rotate around the Y axis (vertical axis)
    }
  });

  return (
    <group {...props} dispose={null} ref={modelRef}>
      <group position={[-0.153, 1.099, 0.239]} scale={0.485}>
        {[...Array(16)].map((_, index) => (
          <mesh
            key={index}
            castShadow
            receiveShadow
            geometry={nodes[`Object_${index + 4}`]?.geometry}
            material={materials.GARUDA_MATERIAL}
          />
        ))}
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials.Gold_Damaged}
        position={[-0.019, 0.633, 0.426]}
        rotation={[1.708, -0.008, 0.002]}
        scale={0.214}
        
      />
    </group>
  );
}

useGLTF.preload("/models/garuda.glb");

export default Garuda;
