/*
interface WatchedParameter {
  methodName: string
  parameterIndex: number
}

const watchedParameters: WatchedParameter[] = []

function Watch (target: any, methodName: string, parameterIndex: number) {
  watchedParameters.push({
    methodName,
    parameterIndex
  })
}

class Vehicle {
  move (@Watch speed: number) {}
}

console.log(watchedParameters)
*/
