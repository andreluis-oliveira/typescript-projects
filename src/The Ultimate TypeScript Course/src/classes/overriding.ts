/*
class Person {
  constructor (public firstName: string, public lastName: string) {}

  get fullName (): string {
    return `${this.firstName} ${this.lastName}`
  }

  walk (): void {
    console.log('Walking')
  }
}

class Student extends Person {
  constructor (public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName)
  }

  takeTest (): void {
    console.log('Taking a test')
  }
}

const student = new Student(1, 'John', 'Doe')

student.walk()
student.takeTest()

console.log(student.fullName)

class Teacher extends Person {
  override get fullName (): string {
    return `Professor ${super.fullName}`
  }
}

const teacher = new Teacher('John', 'Doe')

console.log(teacher.fullName)

class Principal extends Person {
  override get fullName (): string {
    return `Principal ${super.fullName}`
  }
}

const principal = new Principal('Mary', 'Smith')

console.log(principal)

const printNames = (people: Person[]): void => {
  for (const person of people) {
    console.log(person.fullName)
  }
}

printNames([
  new Student(2, 'John', 'Doe'),
  new Teacher('Mosh', 'Hamedani'),
  new Principal('Mary', 'Smith')
])

*/
