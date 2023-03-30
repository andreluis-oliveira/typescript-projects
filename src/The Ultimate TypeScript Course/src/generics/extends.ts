interface Product {
  name: string
  price: number
}

class Store<T> {
  protected _objects: T[] = []

  add (obj: T): void {
    this._objects.push(obj)
  }

  // T is Product
  // keyof T => name | price
  find (property: keyof T, value: unknown): T | undefined {
    return this._objects.find(obj => obj[property] === value)
  }
}

const store = new Store<Product>()

store.add({ name: 'a', price: 1 })
store.find('name', 'a')
store.find('price', 1)
// store.find('nonExistingProperty', 1)

/*
class CompressibleStore<T> extends Store<T> {
  compress () {}
}

class SearchableStore<T extends { name: string }> extends Store<T> {
  find (name: string): T | undefined {
    return this._objects.find(obj => obj.name === name)
  }
}

// Fix the generic type parameter
class ProductStore extends Store<Product> {
  filterByCategory (category: string): Product[] {
    return []
  }
}

// const store = new CompressibleStore<Product>()

*/
