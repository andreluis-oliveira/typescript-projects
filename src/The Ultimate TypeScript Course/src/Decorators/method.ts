/*
import { log } from 'console'

function Log (target: any, methodName: string, descriptor: PropertyDescriptor): void {
  const original = descriptor.value as Function
  descriptor.value = function (...args: any) {
    console.log('Before')
    original.call(this, ...args)
    console.log('After')
  }
}

class Person {
  @Log
  say (message: string): void {
    console.log(`Person says ${message}`)
  }
}

const person = new Person()
person.say('Hello')
*/
