let person = {
    name: "Naveen",
    age: 22,

    display: function() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
};

person.display();