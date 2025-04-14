// Home work
// task-1
// function calc(x, y) {
//     let sum=0
//     for (let i = 1; i <= x; i++){
//         sum+=i**y
//     }
//     return sum
// }
// console.log(calc(3,4));

// task-2
// function isPrime(num) {
//     if (num < 2)
//         return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// function calc(n, m) {
//     let sum = 1
//     for (let i = n; i <= m; i++) {
//         let a = isPrime(i)
//         if (a == true) {
//             sum += i
//         }
//     }
//     return sum
// }
// console.log(("Natija: " + calc(1, 20)));