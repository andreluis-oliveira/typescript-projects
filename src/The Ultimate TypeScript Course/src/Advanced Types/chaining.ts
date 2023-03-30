interface Customer {
  birthday: Date
}

const getCustomer = function (id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() }
}

const customer = getCustomer(1)

// Optional property acess operator
console.log(customer?.birthday)
