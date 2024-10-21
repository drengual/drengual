// StarryBackground.js
import { useEffect, useRef } from "react";
import * as THREE from "three";

const StarryBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountNode = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 2;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountNode.appendChild(renderer.domElement);

    // Star generation
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    // Create a group to hold the stars
    const starGroup = new THREE.Group();
    const starCount = 1000;

    for (let i = 0; i < starCount; i++) {
      const starGeometry = new THREE.CircleGeometry(1, 8); // Create a circle with radius 0.02 and 8 segments
      const star = new THREE.Mesh(starGeometry, starMaterial);

      // Randomly position the star
      star.position.x = (Math.random() - 0.5) * 3000;
      star.position.y = (Math.random() - 0.5) * 3000;
      star.position.z = -Math.random() * 1000;

      starGroup.add(star); // Add the star to the group
    }

    scene.add(starGroup); // Add the star group to the scene

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      starGroup.rotation.x += 0.0005; // Slow rotation on the x-axis
      starGroup.rotation.y += 0.00005; // Slow rotation on the y-axis
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function
    return () => {
      mountNode.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <div
        ref={mountRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, // Ensure it's behind other content
        }}
      />
    </>
  );
};

export default StarryBackground;
