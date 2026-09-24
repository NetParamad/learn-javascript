// 08 - objects
const user = { id: 1, name: "Net", tags: ["js"] };

console.log(user.name);
console.log(user["name"]); // เหมือนกัน ใช้เมื่อ key มาจากตัวแปร

// โน้ต: destructuring ดึงค่าออกมาสั้นๆ
const { name, id } = user;
console.log(id, name);

// โน้ต: spread รวม object
const updated = { ...user, age: 25 };
console.log(updated);

// โน้ต: Object.keys/values/entries วนลูป
console.log(Object.keys(user));
console.log(Object.values(user));
