const greet = function (name: string | null = null): string {
  if (name !== null) {
    return name.toLocaleUpperCase()
  }
  return 'Name is NULL'
}

console.log(greet(null))
