const clrs = [250, 5, '#00603F', [0, 95, 65, 50]]
let data = {}
let trees = []
let _cSize
let _canvasWidth
let _canvasHeight
let _showCanvas = true
let _maxBraches = 400
let _resetCanvas = true

function preload() {
	data = loadJSON('assets/data.json')
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
	if (_showCanvas) {
		// check the quality based on the framerate
		if (frameRate() > 25 && _quality < _maxBraches) _quality++
		else if (_quality > 100 && frameCount % 30 == 0) _quality--

		background(clrs[0])
		// animation
		_cSize = map(sin(frameCount * 0.1), -1, 1, 25, 50)
		// z index scale y index
		const z = (map(mouseY, 0, windowHeight, 0, 500))
		translate(0, 0, z)
		// rotate
		rotateX(map(sin(frameCount * 0.01 + PI / 2), -1, 1, radians(-45), radians(-90)))
		rotateY(radians(-map(mouseX, 0, windowWidth, 90, -90)))
		translate(0, 0, 0)

		trees.forEach(t => {
			// show tree
			t.show()
		})
	} else if (_resetCanvas) {
		_resetCanvas = false
		trees.forEach(t => {
			// show tree
			t.reset()
		})
	}
}

function keyPressed() {
	if (key == 'A') {
		console.log(key)
		_showCanvas = !_showCanvas
		_resetCanvas = true
	}
}