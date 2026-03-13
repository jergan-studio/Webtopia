const player = new THREE.Group();

const body = new THREE.Mesh(
new THREE.BoxGeometry(1,2,0.5),
new THREE.MeshStandardMaterial({color:0xffffff})
);

player.add(body);

const head = new THREE.Mesh(
new THREE.SphereGeometry(0.5),
new THREE.MeshStandardMaterial({color:0xffffff})
);

head.position.y = 1.5;
player.add(head);

scene.add(player);

let speed = 0.1;

document.addEventListener("keydown",(e)=>{

if(e.key=="w") player.position.z -= speed
if(e.key=="s") player.position.z += speed
if(e.key=="a") player.position.x -= speed
if(e.key=="d") player.position.x += speed

});
