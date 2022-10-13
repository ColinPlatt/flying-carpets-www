import React from "react";
import { Canvas } from "@react-three/fiber";
import Lights from "./Light";
import Model from "./Model";
import { OrbitControls } from "@react-three/drei";

 

const Carpet = () => {
  return (
    <>
      <Canvas camera={{
          near: 0.1,
          far: 1000,
          zoom: 1,
        }}>
        <fog 
          color="#d5f8f8"
          near={100}
          far={300}
        />
        <Lights />
        <OrbitControls/>
        <Model />
      </Canvas>
    </>
  );
};


export default Carpet;