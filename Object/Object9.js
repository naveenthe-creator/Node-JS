let employee = {
    name: "Rahul",
    monthlySalary: 30000,

    annualSalary: function() {
        return this.monthlySalary * 12;
    }
};

console.log(employee.annualSalary());