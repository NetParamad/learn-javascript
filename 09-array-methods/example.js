// 09 - array methods โน้ต: ตัวที่ต้องจำมี 4 ตัวนี้
const nums = [1, 2, 3, 4, 5];

console.log(nums.map((n) => n * 2)); // แปลงทุกตัว -> array ใหม่
console.log(nums.filter((n) => n % 2 === 0)); // กรอง -> array ใหม่
console.log(nums.find((n) => n > 3)); // เอาตัวแรกที่เจอ
console.log(nums.reduce((sum, n) => sum + n, 0)); // รวมเป็นค่าเดียว

// โน้ต: ชุดนี้ใช้กับข้อมูล fetch บ่อยสุด
const users = [
 { id: 1, name: "A", active: true },
 { id: 2, name: "B", active: false },
];
console.log(users.filter((u) => u.active).map((u) => u.name));
