async function loadGame(){

const params = new URLSearchParams(location.search)
const game = params.get("game")

const script = await fetch(`games/${game}/game.jve`)
.then(r=>r.text())

runJVE(script)

}

function runJVE(code){

const lines = code.split("\n")

lines.forEach(line=>{

if(line.startsWith("print")){
const msg = line.replace("print ","")
console.log(msg)
}

if(line.startsWith("cube")){
createCube()

}

})

}

function createCube(){

const cube = new THREE.Mesh(
new THREE.BoxGeometry(),
new THREE.MeshStandardMaterial({color:0x00ff00})
)

cube.position.y = 1

scene.add(cube)

}

loadGame()
