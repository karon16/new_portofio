"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "next-themes";

function MorphingParticles() {
    const { theme } = useTheme();
    const particleColor = theme === 'light' ? "#171717" : "#e8e8e8";

    const count = 3000;
    const meshRef = useRef<THREE.Points>(null);
    const mouseRef = useRef(new THREE.Vector2(9999, 9999));

    const { positions, targets, sphereTargets } = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const targets = new Float32Array(count * 3);
        const sphereTargets = new Float32Array(count * 3);

        const startRadius = 3.5;
        for (let i = 0; i < count; i++) {
            const u = Math.random();
            const v = Math.random();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);
            const r = Math.cbrt(Math.random()) * startRadius;

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            targets[i * 3] = x;
            targets[i * 3 + 1] = y;
            targets[i * 3 + 2] = z;
        }

        const radius = 2.5;
        for (let i = 0; i < count; i++) {
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;

            sphereTargets[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
            sphereTargets[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
            sphereTargets[i * 3 + 2] = radius * Math.cos(phi);
        }

        return { positions, targets, sphereTargets };
    }, []);

    const timeRef = useRef(0);

    useFrame((state) => {
        if (!meshRef.current) return;

        timeRef.current += state.clock.getDelta();
        const cycleDuration = 3.8;
        const timeInCycle = timeRef.current % cycleDuration;

        let morphFactor = 0;
        if (timeInCycle < 3) {
            morphFactor = timeInCycle / 3;
        } else {
            const snapProgress = (timeInCycle - 3) / 0.8;
            morphFactor = 1 - snapProgress;
        }

        const positionAttribute = meshRef.current.geometry.attributes.position;
        for (let i = 0; i < count; i++) {
            const ix = i * 3;
            const iy = i * 3 + 1;
            const iz = i * 3 + 2;

            const tx = targets[ix] + (sphereTargets[ix] - targets[ix]) * morphFactor;
            const ty = targets[iy] + (sphereTargets[iy] - targets[iy]) * morphFactor;
            const tz = targets[iz] + (sphereTargets[iz] - targets[iz]) * morphFactor;

            positionAttribute.setXYZ(i, tx, ty, tz);
        }

        positionAttribute.needsUpdate = true;
        meshRef.current.rotation.y += 0.002;
    });

    const handlePointerMove = (e: any) => {
        mouseRef.current.set(e.pointer.x, e.pointer.y);
    };

    return (
        <points ref={meshRef} onPointerMove={handlePointerMove}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                color={particleColor}
                transparent
                opacity={0.8}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

export default function DataMorphosis() {
    return (
        <div className="w-full h-full">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                dpr={[1, 2]}
                gl={{ alpha: true, antialias: true }}
            >
                <MorphingParticles />
            </Canvas>
        </div>
    );
}
