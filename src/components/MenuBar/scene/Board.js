import { useGLTF } from "@react-three/drei"
import { useLayoutEffect } from "react";

export const Board = ({ currentColor, currentTexture, colorMap, normalMap, roughnessMap, metalnessMap }) => {

  const { scene, materials } = useGLTF('/board.glb');
  console.log("materials======>", materials)

  useLayoutEffect(() => {
    Object.assign(materials.Material_0, {
      metalnessMap: metalnessMap,
      normalMap: normalMap,
      roughnessMap: roughnessMap,
      map: colorMap,
      color: currentColor
      })
  }, [scene, materials, currentColor, currentTexture, colorMap, normalMap, roughnessMap, metalnessMap ]);


  return <primitive object={scene} />

}