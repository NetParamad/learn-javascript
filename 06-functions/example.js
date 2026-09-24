// 06 - functions
function add(a, b) {
 return a + b;
}
const multiply = (a, b) => a * b; // arrow สั้นๆ

console.log(add(2, 3));
console.log(multiply(2, 3));

// โน้ต: default param กัน undefined
function greet(name = "guest") {
 return `hi ${name}`;
}
console.log(greet());
console.log(greet("Net"));

// โน้ต: arrow ไม่มี this ของตัวเอง - อย่าใช้เป็น method ที่ต้องใช้ this
const counter = {
 count: 0,
 inc() {
  this.count++;
 },
};
counter.inc();
console.log(counter.count);
