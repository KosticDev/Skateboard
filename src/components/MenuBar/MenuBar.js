import board from "../../assets/board.png"
import wheel from "../../assets/wheel.png"
import truck from "../../assets/truck.png"
import hardware from "../../assets/hardware.png"
import griptape from "../../assets/griptape.png"
import exit from "../../assets/exit.svg"
import texture1 from "../../assets/Metal040_1K_Color1.jpg"
import texture2 from "../../assets/Texture_Color.jpg"
import consultation from "../../assets/consultation.svg"
import './menubar.css'
import '../action'
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Scene } from './scene/Scene';
import { Scene1 } from './scene/Scene1';
import { Scene0 } from './scene/Scene0';
import * as THREE from 'three';

export default function MenuBar() {

    const red = new THREE.Color("#dc143c");
    const yellow = new THREE.Color("#ffff00");
    const Purple = new THREE.Color("Purple");
    const green = new THREE.Color("green");
    const white = new THREE.Color("#ffffff");

    const smooth = [
        './textures/Texture_Color.jpg',
        './textures/Texture_NormalGL.jpg',
        './textures/Texture_Roughness.jpg',
        './textures/Texture_Metalness.jpg',
    ];

    const rough = [
        './textures/Metal040_1K_Color1.jpg',
        './textures/Metal040_1K_NormalGL1.jpg',
        './textures/Metal040_1K_Roughness1.jpg',
        './textures/Metal040_1K_Metalness1.jpg',
    ];

    const [currentColor, setCurrentColor] = useState(false);
    const [currentTexture, setCurrentTexture] = useState(smooth);

    const handleColorChange = (event, color) => {
        console.log(color);
        event.preventDefault();
        if (color == 'red') {
            setCurrentColor(red);
        } else if (color == 'yellow') {
            setCurrentColor(yellow);
        } else if (color == 'Purple') {
            setCurrentColor(Purple);
        } else if (color == 'green') {
            setCurrentColor(green);
        } else if (color == 'white') {
            setCurrentColor(white);
        }
    };

    const handleTextureChange = (event, texture) => {
        console.log("hi", texture)
        event.preventDefault();
        if (texture === 'smooth') {
            setCurrentTexture(smooth);
        } else if (texture === 'rough') {
            setCurrentTexture(rough);
        }
    };

    return (
        <>
            <div className="menubar">
                <div className="main_menubar">
                    <div className="list">
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <ul>
                        <li className="board">
                            <img src={board} alt="" />
                            <p id="id">Boards</p>
                        </li>
                        <li className="wheel">
                            <img src={wheel} alt="" />
                            <p id="id">Wheels</p>
                        </li>
                        <li className="truck">
                            <img src={truck} alt="" />
                            <p id="id">Trucks</p>
                        </li>
                        <li className="hardware">
                            <img src={hardware} alt="" />
                            <p id="id">Hardware</p>
                        </li>
                        <li className="griptape">
                            <img src={griptape} alt="" />
                            <p id="id">Griptape</p>
                        </li>
                    </ul>
                </div>
                <div className="bottom_menubar">
                    <ul>
                        <li>
                            <img src={consultation} alt="" />
                            <p>Consulation</p>
                        </li>
                        <li>
                            <img src={exit} alt="" />
                            <p>Exit</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="hidden_model">
                <div className="title">
                    <p id="board" className="label">Boards</p>
                    <p id="wheel" className="label">Wheels</p>
                    <p id="truck" className="label">Trucks</p>
                    <p id="hardware" className="label">Hardware</p>
                    <p id="griptape" className="label">Griptape</p>
                    <p className="close">X</p>
                </div>
                <div id="card_board" className="content">
                    <div className="models">
                        <div className="card">
                            <a onClick={event => handleTextureChange(event, 'rough')} href="#">
                                <img src={texture1} alt="" style={{"width": "100%", "height": "100%"}} />
                            </a>
                            <h2>SPLA Texture1 deck</h2>
                            <p>Deck length:
                                <select>
                                    <option>34"</option>
                                    <option>30"</option>
                                    <option>28"</option>
                                    <option>25"</option>
                                    <option>24"</option>
                                    <option>20"</option>
                                </select>
                                <br />
                                Deck width:
                                <select>
                                    <option>8.5"</option>
                                    <option>7.5"</option>
                                    <option>6.8"</option>
                                    <option>6.5"</option>
                                    <option>6.0"</option>
                                    <option>5.7"</option>
                                </select>
                            </p>
                            <p className="addbtn"><strong>Add to&nbsp;Model &nbsp;</strong> +</p>
                        </div>
                        <div className="card">
                            <a onClick={event => handleTextureChange(event, 'smooth')} href="#">
                                <img src={texture2} alt="" style={{"width": "100%", "height": "100%"}} />
                            </a>
                            <h2>SPLA Texture2 deck</h2>
                            <p>Deck length:
                                <select>
                                    <option>34"</option>
                                    <option>30"</option>
                                    <option>28"</option>
                                    <option>25"</option>
                                    <option>24"</option>
                                    <option>20"</option>
                                </select>
                                <br />
                                Deck width:
                                <select>
                                    <option>8.5"</option>
                                    <option>7.5"</option>
                                    <option>6.8"</option>
                                    <option>6.5"</option>
                                    <option>6.0"</option>
                                    <option>5.7"</option>
                                </select>
                            </p>
                            <p className="addbtn"><strong>Add to&nbsp;Model &nbsp;</strong> +</p>
                        </div>
                    </div>
                    <div className="models">
                        <div className="card">
                            <a onClick={event => handleColorChange(event, 'yellow')} href="#">
                                <Canvas dpr={[1, 2]} camera={{ fov: 50 }} flat linear>
                                    <color attach="background" args={['#eee']} />
                                    <Suspense fallback={null}>
                                        <Scene />
                                    </Suspense>
                                    <OrbitControls autoRotate enableZoom={true} enablePan={true} />
                                </Canvas>
                            </a>
                            <h2>SPLA Purple deck</h2>
                            <p>Deck length:
                                <select>
                                    <option>34"</option>
                                    <option>30"</option>
                                    <option>28"</option>
                                    <option>25"</option>
                                    <option>24"</option>
                                    <option>20"</option>
                                </select>
                                <br />
                                Deck width:
                                <select>
                                    <option>8.5"</option>
                                    <option>7.5"</option>
                                    <option>6.8"</option>
                                    <option>6.5"</option>
                                    <option>6.0"</option>
                                    <option>5.7"</option>
                                </select>
                            </p>
                            <p className="addbtn"><strong>Add to&nbsp;Model &nbsp;</strong> +</p>
                        </div>
                        <div className="card">
                            <a onClick={event => handleColorChange(event, 'red')} href="#">
                                <Canvas dpr={[1, 2]} camera={{ fov: 50 }} flat linear>
                                    <color attach="background" args={['#eee']} />
                                    <Suspense fallback={null}>
                                        <Scene0 />
                                    </Suspense>
                                    <OrbitControls autoRotate enableZoom={true} enablePan={true} />
                                </Canvas>
                            </a>
                            <h2>SPLA Red deck</h2>
                            <p>Deck length:
                                <select>
                                    <option>34"</option>
                                    <option>30"</option>
                                    <option>28"</option>
                                    <option>25"</option>
                                    <option>24"</option>
                                    <option>20"</option>
                                </select>
                                <br />
                                Deck width:
                                <select>
                                    <option>8.5"</option>
                                    <option>7.5"</option>
                                    <option>6.8"</option>
                                    <option>6.5"</option>
                                    <option>6.0"</option>
                                    <option>5.7"</option>
                                </select>
                            </p>
                            <p className="addbtn"><strong>Add to&nbsp;Model &nbsp;</strong> +</p>
                        </div>
                    </div>
                </div>
                <div id="card_wheel" className="content">
                    <div className="models">
                        <div className="card">
                            <img src="" alt="No Wheel" />
                        </div>
                        <div className="card">
                            <img src="" alt="No Wheel" />
                        </div>
                    </div>
                    <div className="models">
                        <div className="card">
                            <img src="" alt="No Wheel" />
                        </div>
                        <div className="card">
                            <img src="" alt="No Wheel" />
                        </div>
                    </div>
                    <div className="models">
                        <div className="card">
                            <img src="" alt="No Wheel" />
                        </div>
                        <div className="card">
                            <img src="" alt="No Wheel" />
                        </div>
                    </div>
                </div>
                <div id="card_truck" className="content">
                    <div className="models">
                        <div className="card">
                            <img src="" alt="No Truck" />
                        </div>
                        <div className="card">
                            <img src="" alt="No Truck" />
                        </div>
                    </div>
                    <div className="models">
                        <div className="card">
                            <img src="" alt="No Truck" />
                        </div>
                        <div className="card">
                            <img src="" alt="No Truck" />
                        </div>
                    </div>
                    <div className="models">
                        <div className="card">
                            <img src="" alt="No Truck" />
                        </div>
                        <div className="card">
                            <img src="" alt="No Truck" />
                        </div>
                    </div>
                </div>
                <div id="card_hardware" className="content">
                    <div className="models">
                        <div className="card">
                            <img src="" alt="No Hardware" />
                        </div>
                        <div className="card">
                            <img src="" alt="No Hardware" />
                        </div>
                    </div>
                    <div className="models">
                        <div className="card">
                            <img src="" alt="No Hardware" />
                        </div>
                        <div className="card">
                            <img src="" alt="No Hardware" />
                        </div>
                    </div>
                    <div className="models">
                        <div className="card">
                            <img src="" alt="No Hardware" />
                        </div>
                        <div className="card">
                            <img src="" alt="No Hardware" />
                        </div>
                    </div>
                </div>
                <div id="card_griptape" className="content">
                    <div className="models">
                        <div className="card">
                            <img src="" alt="No Griptape" />
                        </div>
                        <div className="card">
                            <img src="" alt="No Griptape" />
                        </div>
                    </div>
                    <div className="models">
                        <div className="card">
                            <img src="" alt="No Griptape" />
                        </div>
                        <div className="card">
                            <img src="" alt="No Griptape" />
                        </div>
                    </div>
                    <div className="models">
                        <div className="card">
                            <img src="" alt="No Griptape" />
                        </div>
                        <div className="card">
                            <img src="" alt="No Griptape" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="main_content" style={{ width: "100%" }}>
                <Canvas dpr={[1, 2]} camera={{ fov: 50 }} flat linear>
                    <color attach="background" args={['#aaa']} />
                    <Suspense fallback={null}>
                        <Scene1 currentTexture={currentTexture} currentColor={currentColor} />
                    </Suspense>
                    <OrbitControls autoRotate enableZoom={true} enablePan={true} />
                </Canvas>
            </div>
        </>
    )
}