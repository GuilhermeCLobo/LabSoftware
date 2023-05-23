class CollisionBlock {
  constructor({ position, height = 4 }) {
    this.position = position
    this.width = 4
    this.height = height
  }

  draw() {
    c.fillStyle = 'rgba(255, 0, 0, 0.5)'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update() {
    this.draw()
  }
}
