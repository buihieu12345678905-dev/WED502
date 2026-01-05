function rectangleInfo(length, width) {
    var perimeter = 2 * (length + width);
    var area = length * width;
    return { perimeter: perimeter, area: area };
}
function sumNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (sum, num) { return sum + num; }, 0);
}
function countCharacter(str, char) {
    var count = 0;
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var c = str_1[_i];
        if (c === char) {
            count++;
        }
    }
    return count;
}
function isPrime(n) {
    if (n < 2)
        return false;
    if (n === 2)
        return true;
    if (n % 2 === 0)
        return false;
    for (var i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0)
            return false;
    }
    return true;
}
console.log(rectangleInfo(5, 3));
