class Logger {
  constructor (public fileName: string) {}

  log (message: string): void {
    console.log(`message "${message}", file ${this.fileName}`)
  }
}

const logger = new Logger('my.log')

logger.log('my message')

class Person {
  constructor (public firstName: string, public lastName: string) {}

  get fullName (): string {
    return `${this.firstName} ${this.lastName}`
  }
}

class Employee extends Person {
  constructor (firstName: string, lastName: string, public salary: number) {
    super(firstName, lastName)
  }
}

interface Address {
  street: string
  city: string
  zipCode: number
}

interface Employee {
  name: string
  salary: number
  address: Address
}
