"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Background2() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set( 0, 0, 100 );
        camera.lookAt( 0, 0, 0 );
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild( renderer.domElement);

        const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
        const points = [];
        points.push( new THREE.Vector3( - 10, 0, 0 ) );
        points.push( new THREE.Vector3( 0, 10, 0) );
        points.push( new THREE.Vector3( 10, 0, 0 ) );

        const geometry = new THREE.BufferGeometry().setFromPoints( points );

        const line = new THREE.Line( geometry, material );
        scene.add(line);

        renderer.render( scene, camera );

        return () => {
            renderer.dispose();
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            line.dispose();
        };
    }, []); 
    return (
        <div ref={containerRef}></div>
    )
}