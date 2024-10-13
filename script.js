// script.js

const textEntity = document.getElementById('textEntity');

// Continuous rotation
let rotation = 0;

function rotateText() {
    rotation += 0.5; // Adjust speed of rotation
    textEntity.setAttribute('rotation', {x: 0, y: rotation, z: 0});
    requestAnimationFrame(rotateText);
}

rotateText();

// Update rotation based on mouse movement
document.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1; // Normalize to [-1, 1]
    const y = -(event.clientY / window.innerHeight) * 2 + 1; // Normalize to [-1, 1]

    const tiltX = y * 15; // Adjust tilt strength
    const tiltY = x * 15; // Adjust tilt strength

    textEntity.setAttribute('rotation', {
        x: tiltX,
        y: rotation, // Maintain ongoing rotation
        z: tiltY
    });
});
