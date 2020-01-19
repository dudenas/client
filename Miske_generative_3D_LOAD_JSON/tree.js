let diff = 200
let zIndex = 0
let rows = 8
let randomMove = 250

class Tree {
  constructor(treeIndex) {
    this.donated = random(1) > 0.8
    this.branches = []
    // this.pos = createVector(0, 0, 0)
    this.treeIndex = treeIndex
    this.startIndex = data[this.treeIndex][0].index
    const totalWidth = floor((Object.keys(data).length - 1) / rows)
    const x = map(zIndex, 0, totalWidth, 0, diff * 2);
    const z = map(this.treeIndex % rows, 0, rows - 1, -diff, diff);
    if (this.treeIndex % rows == 0 && zIndex != this.treeIndex) zIndex++
    this.pos = createVector(x - 270 - diff + random(-randomMove, randomMove), -270 - 125, z + random(-randomMove, randomMove))

    // go over all branches and create tree object
    for (let i = 0; i < Object.keys(data[this.treeIndex]).length; i++) {
      const pos = createVector(data[this.treeIndex][i].pos.x, data[this.treeIndex][i].pos.y, data[this.treeIndex][i].pos.z)
      const dir = createVector(data[this.treeIndex][i].dir.x, data[this.treeIndex][i].dir.y, data[this.treeIndex][i].dir.z)
      const index = data[this.treeIndex][i].index
      const parentIndex = data[this.treeIndex][i].parentIndex
      const parent = this.branches[parentIndex]
      this.branches[index] = new Branch(parent, pos, dir)
    }
  }

  // SHOW
  show() {
    push()
    translate(this.pos.x, this.pos.y, this.pos.z)

    this.branches.forEach((b, index) => {
      // console.log(index)
      if (index == this.startIndex) {
        if (this.donated) {
          b.showDot(true)
        } else {
          b.showDot(false)
        }
      } else if (this.donated) {
        b.show()
      }
    })
    pop()
  }

}