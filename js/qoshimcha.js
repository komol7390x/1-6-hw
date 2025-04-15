// Home work
// task-1
// task-1
// function func1(a) {
//     sum = 0;
//     return function(b){
//         for (let i = 1; i <= a; i++){
//             sum += i ** b;
//         }console.log(sum);
//     };
// }
// func1(2)(2)

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

// task-4
// function fibonacci(n) {
//     if (n < 0) {
//         return "Musbat butun son kiriting!";
//     }
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(10));