// ********************* 3D Header *******************
//
// This is the script that drives my 3d header section.
// The hope is to be able to showcase some basic cool lowpoly art in the header.
// I want basic controls with a ui to move a camera around an imported model like a "showcase" but restrict camera movement to be at a certain angle.
//
// http://solutiondesign.com/getting-started-with-webgl-and-three-js/ <- check out this sweet tutorial.
//
// todo:
// - clean up code! put into seperate functions to make it more readable & comment it out for christs sake
// - download entire three.js library and pull all src from that, instead of cdn
// - learn how to import models/textures
// - get a good lighting setup
// - create basic camera movement
// - create simple ui for movement or swipe and drag movement
//
//
var size = 2;
var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 10000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(size, size, size);
var material = new THREE.MeshNormalMaterial();
var cube = new THREE.Mesh(geometry, material);
var light = new THREE.AmbientLight(0x404040);
scene.add(light);
scene.add(cube);
camera.position.z = 6;

function render() {
	requestAnimationFrame(render);
	cube.rotation.x += 0.025;
	cube.rotation.y += 0.025;
	renderer.render(scene, camera);
};

render();