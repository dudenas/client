let sketch = function (p) {
	p.setup = function () {
		p.createCanvas(p.windowWidth, p.windowHeight)
		p.rectMode(p.CENTER)
	}

	p.draw = function () {
		p.background(250)
		p.noStroke()
		p.fill(85, 0, 255)
		// p.rect(p.width / 2, p.height / 5 - 50, 200, 200)
		p.textSize(24)
		for (let i = 0; i < 10; i++) {
			let y = i * (p.height / 10);
			p.text('labas', p.width / 2, y)
		}
	}
}

new p5(sketch, 'sketch')