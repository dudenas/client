let _speed = 10

class Branch {
  constructor(parent, pos, dir) {
    this.pos = pos
    this.parent = parent
    this.animPos = this.parent != null ? this.parent.pos.copy() : null
    this.dir = dir
    this.percent = 0
  }

  show() {
    if (this.parent != null) {
      if (!this.done) {
        this.animate()
        this.percent += _speed
      }
      noFill()
      stroke(clrs[2])
      strokeWeight(1)

      // line(this.pos.x, this.pos.y, this.pos.z, this.parent.pos.x, this.parent.pos.y, this.parent.pos.z)
      beginShape()
      vertex(this.parent.pos.x, this.parent.pos.y, this.parent.pos.z)
      vertex(this.animPos.x, this.animPos.y, this.animPos.z)
      endShape()
      if (this.percent > 100) {
        this.done = true
      }
    }
  }

  animate() {
    this.animPos.x = map(this.percent, 0, 100, this.parent.pos.x, this.pos.x)
    this.animPos.y = map(this.percent, 0, 100, this.parent.pos.y, this.pos.y)
    this.animPos.z = map(this.percent, 0, 100, this.parent.pos.z, this.pos.z)
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