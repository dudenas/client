class Leaf {
  constructor() {
    const angle = random(0, TWO_PI)
    const h = radius
    const r = random(h / 4, h)
    const u = random(-r, r)
    // const x = width / 2 + r * cos(angle)
    // const y = height / 2 + r * sin(angle)
    // const x = width / 2 + ((h - u) / h) * (r * cos(angle))
    // const y = height / 2 + ((h - u) / h) * (r * sin(angle))

    const x = width / 2 + sqrt(r * r - u * u) * cos(angle)
    const y = height / 2 + sqrt(r * r - u * u) * sin(angle)
    const z = u
    this.pos = createVector(x, y, z)
    this.reached = false
  }

  show() {
    noStroke()
    fill(clrs[1])
    push()
    translate(this.pos.x, this.pos.y, this.pos.z)
    sphere(1, 3)
    pop()
  }
}