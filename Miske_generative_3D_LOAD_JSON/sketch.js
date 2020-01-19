const clrs = [250, 5, '#00603F', [0, 95, 65, 50]]
let data = {}
let trees = []
let _cSize
let _canvasWidth
let _canvasHeight

function preload() {
	data = loadJSON('assets/data_20.json')
	// data = loadJSON('assets/data_100.json')
}

function setup() {

	_canvasWidth = 1800
	_canvasHeight = 1200

	createCanvas(_canvasWidth, _canvasHeight, WEBGL).parent('#grfc')
	pixelDensity(2)

	// go over all trees and generate a new tree
	for (let i = 0; i < Object.keys(data).length; i++) {
		// generate a tree
		trees.push(new Tree(i))
	}
}

function draw() {
	background(clrs[0])
	// animation
	_cSize = map(sin(frameCount * 0.1), -1, 1, 25, 50)
	// rotate
	// z index scale y index
	const z = (map(mouseY, 0, windowHeight, 0, 500))
	translate(0, 0, z)
	rotateX(map(sin(frameCount * 0.01 + PI / 2), -1, 1, radians(-45), radians(-90)))
	rotateY(radians(-map(mouseX, 0, windowWidth, 90, -90)))
	translate(0, 0, 0)

	trees.forEach(t => {
		// show tree
		t.show()
	})
}