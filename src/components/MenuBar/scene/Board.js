import { useGLTF } from "@react-three/drei"
import { useLayoutEffect } from "react";

export const Board = ({currentColor}) => {
    
    const txt = "Material_0"
    const { scene , materials} = useGLTF('/board.glb');
    console.log("board======>", materials)

    useLayoutEffect(() => {
        Object.assign(materials[txt], { 
          color: currentColor})
      }, [scene, materials, currentColor]);
    

    return <primitive object={scene} />

}