// 05 - loops
for (let i = 0; i < 3; i++) {
 console.log("for:", i);
}

// โน้ต: for...of สำหรับ array (เอาค่า), for...in สำหรับ object (เอาคีย์)
const fruits = ["apple", "banana"];
for (const f of fruits) console.log("of:", f);

const user = { name: "Net", age: 25 };
for (const key in user) console.log("in:", key, user[key]);

// โน้ต: while ใช้เมื่อไม่รู้รอบ
let n = 3;
while (n > 0) {
 console.log("while:", n);
 n--;
}
