
function rectangleInfo(length: number, width: number): { perimeter: number; area: number } {
  const perimeter = 2 * (length + width);
  const area = length * width;
  return { perimeter, area };
}


function sumNumbers(...numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}


function countCharacter(str: string, char: string): number {
  let count = 0;
  for (const c of str) {
    if (c === char) {
      count++;
    }
  }
  return count;
}


function isPrime(n: number): boolean {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(rectangleInfo(5, 3)); 

console.log(sumNumbers(1, 2, 3, 4)); 


console.log(countCharacter("typescript", "t")); 

console.log(isPrime(7)); 
