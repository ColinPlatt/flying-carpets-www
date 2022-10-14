import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls } from "@react-three/drei/core/OrbitControls";
import { Sky } from "@react-three/drei/core/Sky";
import { Cloud } from "@react-three/drei/core/Cloud";

import { Model } from './Model'


export default function Carpet() {
  return (
    <Canvas 
    camera={{fov: 50, near: 0.1, far: 1000, position: [7.5, 5, 1.5]
    }}>
      <Suspense fallback={null}>
        <Model />
        <ambientLight intensity={0.5} />
        <pointLight intensity={1} position={[0, 0, -1000]} />
        <OrbitControls />
        <Cloud position={[-4, -2, -25]} speed={0.2} opacity={0.1} />
        <Cloud position={[4, 2, -15]} speed={0.2} opacity={0.5} />
        <Cloud position={[-4, 2, -10]} speed={0.2} opacity={.25} />
        <Cloud position={[4, -2, -5]} speed={0.2} opacity={0.5} />
        <Cloud position={[4, 2, 0]} speed={0.2} opacity={0.25} />
      </Suspense>
      <Sky azimuth={0.01} turbidity={5} rayleigh={0.1} inclination={0.6} distance={1000} />
    </Canvas>
  )
}