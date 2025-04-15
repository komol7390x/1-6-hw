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

// task-3
// function isEqual(str1="", str2="") {
//     if (str1.length != str2.length) {
//         return false
//     }
//     let len = str1.length
//     for (let i = 0; i < len; i++){
//         if (!str2.includes(str1[i])) {
//             return false
//         }
//     }
//     return true
// }
// console.log(isEqual("abc", "bac"));