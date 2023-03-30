abstract class Shape {
  constructor (public color: string) {

  }

  abstract render (): void
}

class Circle extends Shape {
  constructor (public radius: number, color: string) {
    super(color)
  }

  override render (): void {
    console.log('Rendering a circle')
  }
}

const circle = new Circle(100, 'blue')

circle.render()
