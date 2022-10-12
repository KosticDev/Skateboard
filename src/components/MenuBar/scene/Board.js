import { useGLTF } from "@react-three/drei"
import { useLayoutEffect } from "react";

export const Board = ({ currentColor, currentTexture, colorMap, normalMap, roughnessMap, metalnessMap }) => {

  const { scene, materials } = useGLTF('/submarine.gltf');
  console.log("materials======>", materials)

  useLayoutEffect(() => {
    Object.assign(materials.Material, {
      metalnessMap: metalnessMap,
      normalMap: normalMap,
      roughnessMap: roughnessMap,
      map: colorMap,
      color: currentColor
      })
  }, [scene, materials, currentColor, currentTexture, colorMap, normalMap, roughnessMap, metalnessMap ]);


  return <primitive object={scene} />

}