// 03 - operators โน้ต: === เท่านั้น อย่าใช้ ==
console.log(1 === "1"); // false - ถูกต้อง
console.log(1 == "1"); // true - หลอก อย่าใช้

const a = 5;
console.log(a % 2 === 0 ? "even" : "odd");

// โน้ต: ?? ใช้เมื่อ null/undefined, || ใช้เมื่อ falsy ทั้งหมด
console.log(null ?? "default"); // default
console.log(0 ?? "default"); // 0 (?? ไม่มอง 0 ว่าว่าง)
console.log(0 || "default"); // default (|| มอง 0 ว่าว่าง)

// โน้ต: ?. กันพังเมื่อ object เป็น null
const user = null;
console.log(user?.name ?? "no user");
