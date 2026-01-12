// 1.Khoi tao : Java / OOP / Angular
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    showInfo(): string {
        return `Name: ${this.name} - Age: ${this.age}`;
    }
}

// 2. Khoi tao doi tuong
const p1 = new Person("hoadv", 20);
console.log(p1.showInfo());
// 2. Interface: cau truc object
interface IProduct {
    name: string;
    price: number;
    isActive: boolean;
    hasDiscount?: boolean; // optional
}
const product1: IProduct = {
    name: "Iphone",
    price: 1000,
    isActive: true,
    // hasDiscount: false, // error
};
// 2.3 Interface cho Function
interface SumFunction {
    (a: number, b: number): number;
}

const sum: SumFunction = (a, b) => {
    return a + b;
};
sum(1, 2);

// 3. Type Object
type TProduct = {
    name: string;
    price: number;
};
const product2: TProduct = {
    name: "Samsung",
    price: 800,
};