/*
interface Result<T> {
  data: T | null
  error: string | null
}

const fetchData = function<T>(url: string): Result<T> {
  console.log(url)
  return { data: null, error: null }
}

interface User {
  username: string
}

interface Products {
  title: string
}

const result = fetchData<User>('url')

console.log(result)
*/
