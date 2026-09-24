// 11 - events (รันใน browser)
const btn = document.getElementById("btn");
const out = document.getElementById("out");
let count = 0;

btn.addEventListener("click", () => {
 count++;
 out.textContent = `clicked ${count} times`;
});

// โน้ต: input event สำหรับช่องกรอก
const input = document.getElementById("name");
const hello = document.getElementById("hello");
input.addEventListener("input", (e) => {
 hello.textContent = e.target.value ? `hi ${e.target.value}` : "";
});
