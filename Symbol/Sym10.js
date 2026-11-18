let id = Symbol("id");
let age = Symbol("age");

let user = {
    [id]: 101,
    [age]: 22
};

console.log(Object.getOwnPropertySymbols(user));