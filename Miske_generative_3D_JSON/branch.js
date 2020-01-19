let _index = 0

class Branch {
  constructor(parent, pos, dir, index, parentIndex) {
    this.pos = pos
    this.parent = parent
    this.dir = dir
    this.origDir = dir.copy()
    this.index = index
    this.parentIndex = parentIndex
    this.count = 0
    this.len = len
  }

  reset() {
    this.count = 0
    this.dir = this.origDir.copy()
  }

  next() {
    const nextDir = p5.Vector.mult(this.dir, this.len)
    const nextPos = p5.Vector.add(this.pos, nextDir)
    const nextBranch = new Branch(this, nextPos, this.dir.copy(), _index++, this.index)
    return nextBranch
  }

  show() {
    if (this.parent != null) {
      noFill()
      stroke(clrs[1])
      strokeWeight(1)
      // beginShape()
      // vertex(this.pos.x, this.pos.y, this.pos.y)
      // vertex(this.parent.pos.x, this.parent.pos.y, this.parent.pos.y)
      // endShape()
      line(this.pos.x, this.pos.y, this.pos.z, this.parent.pos.x, this.parent.pos.y, this.parent.pos.z)
    }
  }
}