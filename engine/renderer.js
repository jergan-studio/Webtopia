const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff,1);
light.position.set(10,20,10);
scene.add(light);

const ambient = new THREE.AmbientLight(0x404040);
scene.add(ambient);

const ground = new THREE.Mesh(
new THREE.PlaneGeometry(100,100),
new THREE.MeshStandardMaterial({color:0x888888})
);

ground.rotation.x = -Math.PI/2;
scene.add(ground);

camera.position.set(0,5,10);

function animate(){
requestAnimationFrame(animate);
renderer.render(scene,camera);
}

animate();
