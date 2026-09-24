// 02 - data types
const str = "hello";
const num = 42;
const bool = true;
const nothing = null; // ตั้งใจว่าง
let undef; // ยังไม่กำหนด = undefined
const obj = { a: 1 };
const arr = [1, 2, 3];

console.log(typeof str, typeof num, typeof bool);
console.log("null type:", typeof nothing); // "object" - หลุมพรางจำไว้
console.log("undef:", undef);
console.log(Array.isArray(arr)); // true
