"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rate;
(function (Rate) {
    Rate["low"] = "Th\u1EA5p";
    Rate["medium"] = "Trung b\u00ECnh";
    Rate["high"] = "Cao";
})(Rate || (Rate = {}));
let listProducts = [
    { name: "Sản phẩm A", price: 10, sale: true, rate: Rate.high },
    { name: "Sản phẩm B", price: 4, sale: false, rate: Rate.low },
    { name: "Sản phẩm C", price: 6, sale: true, rate: Rate.medium },
    { name: "Sản phẩm D", price: 3, sale: true, rate: Rate.low },
    { name: "Sản phẩm E", price: 8, sale: false, rate: Rate.high },
];
function addDescription(products) {
    return products.map((product) => ({
        ...product,
        description: product.price > 5 ? "Tốt" : "Bình thường",
    }));
}
const productsWithDescription = addDescription(listProducts);
function displayProducts(products) {
    products.forEach((product) => {
        console.log(`Tên: ${product.name}, Giá: ${product.price}, Sale: ${product.sale ? "Có" : "Không"}, Đánh giá: ${product.rate}`);
    });
}
displayProducts(listProducts);
function totalPrice(products) {
    return products.reduce((total, product) => total + product.price, 0);
}
console.log("Tổng giá bán:", totalPrice(listProducts));
function filterSaleAndGoodRate(products) {
    return products.filter((product) => product.sale &&
        (product.rate === Rate.medium || product.rate === Rate.high));
}
const filteredProducts = filterSaleAndGoodRate(listProducts);
console.log("Sản phẩm Sale & đánh giá từ Trung bình trở lên:", filteredProducts); 
