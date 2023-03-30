var getCustomer = function (id) {
    return id === 0 ? null : { birthday: new Date() };
};
var customer = getCustomer(1);
// Optional property acess operator
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
