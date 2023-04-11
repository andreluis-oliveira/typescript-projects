function MinLength (length: number) {
  return (target: any, propertyName: string) => {
    // We use this variable to hold the value behind the
    // target property.
    let value: string
    // We create a descriptor for the target property.
    const descriptor: PropertyDescriptor = {
      get () { return value },
      // We're defining the setter for the target property.
      set (newValue: string) {
        if (newValue.length < length) {
          throw new Error(`${propertyName} should be at least ${length} characters long`)
        }
        value = newValue
      }
    }
    // And finally, we redefine the property.
    Object.defineProperty(target, propertyName, descriptor)
  }
}
class User {
  @MinLength(4)
    password: string

  constructor (password: string) {
    this.password = password
  }
}

const user = new User('123')

console.log(user.password)
