import { userInfo } from 'os'

function echo<T> (arg: T): T { return arg }

function printName<T extends {name: string}> (obj: T): void {
  console.log(obj.name)
}

class Entity<T> {
  constructor (public id: T) {}
}

interface User {
  userId: number
  username: string
}
