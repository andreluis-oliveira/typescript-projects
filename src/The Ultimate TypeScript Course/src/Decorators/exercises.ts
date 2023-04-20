// Decorator factory
function Sauce (sauce: string) {
  return (constructor: Function) => {
    constructor.prototype.sauce = sauce
  }
}

@Sauce('pesto')
class Pizza {

}

const pizza = new Pizza()

// console.log(pizza.sauce)
