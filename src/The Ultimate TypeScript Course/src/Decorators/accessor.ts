
/*
function Capitalize (target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.get

  descriptor.get = function () {
    const result = original?.call(this)
    return (typeof result === 'string') ? result.toUpperCase() : result
  }
}

class Person {
  constructor (public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName () {
    return `${this.firstName} ${this.lastName}`
  }
}

const person = new Person('John', 'Doe')

console.log(person.fullName)
*/
