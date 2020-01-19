class Branch {
  constructor(parent, pos, dir) {
    this.pos = pos
    this.parent = parent
    this.dir = dir
  }

  show() {
    if (this.parent != null) {
      noFill()
      stroke(clrs[2])
      strokeWeight(1)

      // line(this.pos.x, this.pos.y, this.pos.z, this.parent.pos.x, this.parent.pos.y, this.parent.pos.z)
      beginShape()
      vertex(this.pos.x, this.pos.y, this.pos.z)
      vertex(this.parent.pos.x, this.parent.pos.y, this.parent.pos.z)
      endShape()
    }
  }

  showDot(donated) {
    noFill()
    stroke(clrs[2])

    strokeWeight(1)
    push()
    translate(this.pos.x, this.pos.y, this.pos.z)
    rotateX(radians(90))
    if (donated) {
      ellipse(0, 0, 50, 50)
    } else {
      ellipse(0, 0, _cSize, _cSize)
    }

    pop()
  }
}