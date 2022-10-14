import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { useAnimations } from "@react-three/drei/core/useAnimations";
import { useGLTF } from "@react-three/drei/core/useGLTF";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Sphere001: THREE.SkinnedMesh;
    Carpet: THREE.SkinnedMesh;
    Bone: THREE.Bone;
  };
  materials: {
    Tassels: THREE.MeshPhysicalMaterial;
    Carpet: THREE.MeshPhysicalMaterial;
  };
  animations: GLTFAction[];
};

type ActionName = "Action";
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

export function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations, scene } = useGLTF(
    "/images/FlyingCarpet_test2.glb"
  ) as unknown as GLTFResult;
  

  const { actions, mixer } = useAnimations(animations, group);

  useEffect(() => {
    actions.Action?.play();
  }, [mixer]);
  
  return (
    <group ref={group} position={[0, 0, 0]} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Bone} />
          <skinnedMesh
            name="Sphere001"
            geometry={nodes.Sphere001.geometry}
            material={materials.Tassels}
            skeleton={nodes.Sphere001.skeleton}
          />
          <skinnedMesh
            name="Carpet"
            geometry={nodes.Carpet.geometry}
            material={materials.Carpet}
            skeleton={nodes.Carpet.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/FlyingCarpet_test2.glb");
