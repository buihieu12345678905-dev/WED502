"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const averageScore = (...scores) => {
    if (scores.length === 0)
        return 0;
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
};
console.log(averageScore(8, 7.5, 9, 10)); // 8.625
const checkEvenOdd = (num) => {
    return num % 2 === 0 ? "even" : "odd";
};
console.log(checkEvenOdd(5));
console.log(checkEvenOdd(10));
function createUser(name, age, role = "user") {
    if (age !== undefined) {
        return `Name: ${name}, Age: ${age}, Role: ${role}`;
    }
    return `Name: ${name}, Role: ${role}`;
}
console.log(createUser("Alice", 30, "admin"));
console.log(createUser("Bob"));
console.log(createUser("Charlie", undefined, "moderator"));
function mergeProducts(products1, products2) {
    return [...products1, ...products2];
}
function printProducts(...products) {
    products.forEach((product, index) => {
        console.log(`${index + 1}. ${product}`);
    });
}
const listA = ["Laptop", "Mouse"];
const listB = ["Keyboard", "Monitor"];
const mergedList = mergeProducts(listA, listB);
printProducts(...mergedList);
//# sourceMappingURL=lab3.js.map