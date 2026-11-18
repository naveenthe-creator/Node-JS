let id = Symbol("id");

let user = {
    name: "Naveen",
    [id]: 101
};

console.log(user.name);
console.log(user[id]);