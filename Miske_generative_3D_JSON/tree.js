const totalLeaves = 250
const min_dist = 10
// DEFINES THE TREE
const max_dist = 100
const totalBranches = 800
const len = 10
const radius = 125
const totalTrees = 100

class Tree {
  constructor() {
    this.leaves = []
    this.branches = []

    // generate leaves
    for (let i = 0; i < totalLeaves; i++) {
      this.leaves.push(new Leaf())
    }

    // root
    const pos = createVector(width / 2, height / 2 + radius, 0)
    const dir = createVector(0, -1, 0)
    let root = new Branch(null, pos, dir, _index++, null)
    this.branches.push(root)

    let current = root
    let found = false
    while (!found) {
      for (let l of this.leaves) {
        const d = p5.Vector.dist(current.pos, l.pos)
        if (d < max_dist) {
          current = l
          found = true
          break
        }
      }
      if (!found) {
        let branch = current.next()
        current = branch
        this.branches.push(current)
      }
    }
  }

  // GROW
  grow() {
    if (this.branches.length < totalBranches) {
      // go trough leaves and branches and find distances
      for (let l of this.leaves) {
        let closestBranch = null
        let record = Infinity
        for (let b of this.branches) {
          const d = p5.Vector.dist(l.pos, b.pos)
          if (d < min_dist) {
            l.reached = true
            closestBranch = null
            break
          } else if (d > max_dist) {

          } else if (closestBranch == null || d < record) {
            closestBranch = b
            record = d
          }
        }
        if (closestBranch != null) {
          let newDir = p5.Vector.sub(l.pos, closestBranch.pos)
          newDir.normalize()
          closestBranch.dir.add(newDir)
          closestBranch.count++
        }
      }

      // remove used leaves
      for (let i = this.leaves.length - 1; i >= 0; i--) {
        if (this.leaves[i].reached) {
          this.leaves.splice(i, 1)
        }
      }

      // add new branches
      for (let i = this.branches.length - 1; i >= 0; i--) {
        const branch = this.branches[i]
        if (branch.count > 0) {
          branch.dir.div(branch.count + 1)
          const rVector = p5.Vector.mult(p5.Vector.random3D(), 0.1)
          branch.dir.add(rVector)
          this.branches.push(branch.next())
        }
        branch.reset()
      }
    } else {
      this.leaves = []
    }
  }

  // SHOW
  show() {
    this.leaves.forEach(l => {
      l.show()
    })
    this.branches.forEach((b, index) => {
      // if (index > this.branches.length - 200) b.show()
      b.show()
    })
  }

}