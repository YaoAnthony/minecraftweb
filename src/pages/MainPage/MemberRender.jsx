import React, { Suspense, useEffect, useState,useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Computers = ({ isMobile }) => {
    const computer = useGLTF("./steve/scene.gltf");
    const ref = useRef();

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.01; // 控制旋转速度
        }
    });
    return (
        <mesh ref={ref}>
        <hemisphereLight intensity={3} groundColor='black' />
        <pointLight intensity={40} />
        <primitive
            object={computer.scene}
            scale={isMobile ? 0.7 : 0.75}
            position={isMobile ? [0, -3, 0] : [0, -3.25, 0]}
        />
        </mesh>
    );
};

const MemberRender = () => {
    const [isMobile, setIsMobile] = useState(false);

    //set current texture
    const [currentTexture, setCurrentTexture] = useState(null);

    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
    }, []);

    return (
        <Canvas
            frameloop='always'
            shadows
            dpr={[1, 2]}
            camera={{ position: [75, 3, 75], fov: 15 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={true}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={isMobile} />
            </Suspense>

        <Preload all />
        </Canvas>
    );
};

export default MemberRender;