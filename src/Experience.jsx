import { OrbitControls } from "@react-three/drei";
import { useState, useEffect } from "react";
import Lights from "./world/Lights/Lights";
import Environments from "./world/Environments/Environments";
import { Suspense } from "react";
import WelcomeText from "./world/text/WelcomeText";
import LevelJuly from "./world/levelJuly";
import Palmera from "./world/palmera/palmera";
import { Canvas } from '@react-three/fiber';
import Person from "./world/person/person";
import { Physics } from "@react-three/rapier";
import PelotasPlaya from "./world/obstaculos/obstaculos";
import SillaPlaya from "./world/obstaculos/SillaPlaya";
import { CatModel } from "./world/CatModel/CatModel1";
import { RigidBody } from 'cannon-es';
import { CatModelProvider } from "./world/context/CatModelContext";

const Experience = () => {

    return (

        <>
         {/* <Canvas
                camera={
                    {
                        position: [0, 1.5, -90],
                        
                    }
                }
                shadows={true}
            > */}
    
            <CatModelProvider>
            <Canvas
          shadows
          camera={{
            position: [0, 1.5, -90]
          }}>
              <OrbitControls
              target={[0, 1, 0]}
                 />

        
            <Suspense fallback={null}>
            <Physics debug={false} colliders="trimesh"> 
                <Lights />
                <Environments />
                {/* <Palmera position={[-2, 3.9, -105]}/>
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
                <Palmera position={[2, 3.9, -105]}/> */}

                <LevelJuly 
                    // position={[0, 0, -90]}
                />
                        {/* <PelotasPlaya /> */}
                        {/* <SillaPlaya /> */}
                        <Person 
                          position={[0, -1, -75]}
                            scale={0.2}
                    />
                    <CatModel position={[0, -1, -105]} scale={0.5}/>
            </Physics>
                
                    <WelcomeText position={[0, 1.5, -105]} />
    
            </Suspense>
            
            </Canvas>
            </CatModelProvider>
        </>

        
    )
}

export default Experience;