import { Stage, useTexture } from "@react-three/drei";
import { Board } from "./Board";
import { Wheel } from "./Wheel";
import { Truck } from "./Truck";

export const Scene1 = ({ currentColor, currentTexture }) => {
    const [colorMap, normalMap, roughnessMap, metalnessMap] = useTexture(currentTexture);
    return (
        <Stage intensity={1} >
            <mesh>
                <Board
                    map={colorMap}
                    normalMap={normalMap}
                    roughnessMap={roughnessMap}
                    metalnessMap={metalnessMap}
                    currentColor={currentColor}
                    currentTexture={currentTexture}
                />
            </mesh>
            <mesh>
                <Wheel />
            </mesh>
            <mesh>
                <Truck />
            </mesh>
        </Stage>
    );
}