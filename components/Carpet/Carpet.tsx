import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls } from "@react-three/drei/core/OrbitControls";

import { Model } from './Model'


export default function Carpet() {
  return (
    <Canvas 
    camera={{fov: 75, near: 0.1, far: 1000, position: [0, 0, 5]
    }}>
      <Suspense fallback={null}>
        <Model />
        <ambientLight intensity={0.1} />
        <spotLight intensity={0.5} position={[90, 100, 50]} castShadow />
        <OrbitControls />
      </Suspense>
    </Canvas>
  )
}