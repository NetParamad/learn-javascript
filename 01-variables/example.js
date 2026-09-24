// 01 - variables โน้ต: let เปลี่ยนได้, const เปลี่ยนไม่ได้, var เลี่ยง
let name = "Net";
const age = 25;

name = "Paramad"; // ok
// age = 26; // Error: Assignment to constant variable

console.log("name:", name);
console.log("age:", age);

// โน้ต: const ใช้กับ object ได้ แต่ห้าม assign ใหม่ทั้งก้อน
const user = { id: 1 };
user.id = 2; // ok - แก้ข้างในได้
console.log(user);
