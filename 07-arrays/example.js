// 07 - arrays
const arr = [1, 2, 3];
arr.push(4); // ต่อท้าย
console.log(arr);

console.log(arr[0]); // เข้าถึงด้วย index
console.log(arr.length);
console.log(arr.at(-1)); // ตัวสุดท้าย - ใช้ .at(-1)

// โน้ต: spread copy กันอ้างที่เดียวกัน
const copy = [...arr];
copy.push(99);
console.log("orig:", arr);
console.log("copy:", copy);
