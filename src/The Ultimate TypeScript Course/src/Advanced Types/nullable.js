var greet = function (name) {
    if (name === void 0) { name = null; }
    if (name !== null) {
        return name.toLocaleUpperCase();
    }
    return 'Name is NULL';
};
console.log(greet(null));
