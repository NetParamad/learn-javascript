// 10 - DOM basics (รันใน browser)
// เปิด index.html แล้วดู console + หน้าเว็บ

const title = document.getElementById("title");
title.textContent = "Hello from JS";

const list = document.getElementById("list");
["apple", "banana"].forEach((f) => {
 const li = document.createElement("li");
 li.textContent = f;
 list.appendChild(li);
});

console.log("rendered:", list.children.length, "items");
