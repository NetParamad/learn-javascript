// 12 - fetch (รันด้วย node v18+)
// เป้าหมายของคุณ: fetch + แสดงผล
async function main() {
 try {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  console.log("title:", data.title);
  console.log("body:", data.body.slice(0, 60) + "...");
 } catch (err) {
  console.error("fetch failed:", err.message);
 }
}

main();

//:
// - fetch ไม่ throw ตอน 404 ต้องเช็ค res.ok เอง
// - await res.json() แปลงเป็น object
// - ครอบ try/catch กันเน็ตล่ม
