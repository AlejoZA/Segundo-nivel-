import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshBasicMaterial } from 'three'
import Palmera from './palmera/palmera';
import PelotasPlaya from './obstaculos/obstaculos';

export default function LevelJuly(props) {
  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
    // Optional animation key map
    { name: "action1", keys: ["1"] },
    { name: "action2", keys: ["2"] },
    { name: "action3", keys: ["3"] },
    { name: "action4", keys: ["KeyF"] },
];

  const { nodes, materials } = useGLTF('/assets/models/levelJuly/World.glb')
  return (
    <>
    <Palmera position={[-2, 3.9, -105]}/>
                <Palmera position={[-2, 3.9, -103]}/>
                <Palmera position={[-2, 3.9, -100]}/>
                <Palmera position={[-2, 3.9, -97]}/>
                <Palmera position={[-2, 3.9, -94]}/>
                <Palmera position={[-2, 3.9, -91]}/>
                <Palmera position={[-2, 3.9, -88]}/>
                <Palmera position={[-2, 3.9, -85]}/>
                <Palmera position={[-2, 3.9, -82]}/>
                <Palmera position={[-2, 3.9, -79]}/>
                <Palmera position={[-2, 3.9, -76]}/>
                <Palmera position={[-2, 3.9, -73]}/>
                <Palmera position={[2, 3.9, -73]}/>
                <Palmera position={[2, 3.9, -76]}/>
                <Palmera position={[2, 3.9, -79]}/>
                <Palmera position={[2, 3.9, -82]}/>
                <Palmera position={[2, 3.9, -85]}/>
                <Palmera position={[2, 3.9, -88]}/>
                <Palmera position={[2, 3.9, -91]}/>
                <Palmera position={[2, 3.9, -94]}/>
                <Palmera position={[2, 3.9, -97]}/>
                <Palmera position={[2, 3.9, -100]}/>
                <Palmera position={[2, 3.9, -103]}/>
                <Palmera position={[2, 3.9, -105]}/>
    
    
    <group {...props} dispose={null}>
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.Cubo.geometry}
        material={materials.Material}
        position={[0, 0, -90]}
        scale={[2.5, 1, 17.5]}
      />  

    </group>

    <PelotasPlaya/>


    </>
    
    
  )
}

useGLTF.preload('/assets/models/levelJuly/World.glb')