class ArrayUtils {
  static wrapInArray<T> (value: T): any[] {
    return [value]
  }
}

const myArray = ArrayUtils.wrapInArray(1)

console.log(myArray)
