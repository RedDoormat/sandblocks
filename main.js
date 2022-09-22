// Module imports

import * as THREE from '../node_modules/three/build/three.module.js';

import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';

import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';

const myWorldObj = document.getElementById('myWorld');

// SCENE required 1 of 3
const scene = new THREE.Scene();
// Customize some scene props
scene.background = new THREE.Color(0x111111);

// Add Lighting to scene .. REQUIRED for 3D models
const ambLight = new THREE.AmbientLight(0x101010, 45);
scene.add(ambLight);

const camera = new THREE.PerspectiveCamera(45, myWorldObj.scrollWidth / myWorldObj.scrollHeight, 1, 1000);

camera.position.z = 40;
camera.position.y = 20;
camera.position.x = -30;

// Render required 3 of 3
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(myWorldObj.scrollWidth, myWorldObj.scrollHeight);
myWorldObj.appendChild(renderer.domElement);