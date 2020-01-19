const clrs = [250, 5, [85, 0, 250]]
let tree
let startTime = null
let json = {}
let currentTree = 0
let finnished = false

function setup() {
	createCanvas(540, 540, WEBGL)

	// generate a tree
	tree = new Tree()
}

function draw() {
	if (finnished && totalTrees > currentTree) {
		finnished = false
		tree = new Tree()
		currentTree++
	}
	background(clrs[0])
	rotateY(frameCount * 0.01);
	// rotateX(-PI / 2)
	translate(-width / 2, -height / 2, 0)
	// show tree
	tree.show()
	tree.grow()

	if (tree.leaves.length == 0 && !finnished) {
		json[currentTree] = {}
		for (let i = 0; i < tree.branches.length; i++) {
			const current = tree.branches[i]
			json[currentTree][i] = {
				index: current.index,
				parentIndex: current.parentIndex,
				pos: {
					x: current.pos.x,
					y: current.pos.y,
					z: current.pos.z,
				},
				dir: {
					x: current.dir.x,
					y: current.dir.y,
					z: current.dir.z,
				}
			}
		}
		finnished = true
		if (totalTrees == currentTree) {
			saveJSON(json, 'data.json')
		}
	}
}