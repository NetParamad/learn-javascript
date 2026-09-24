// 13 - mini project: fetch + แสดงผล (เป้าหมาย portfolio)
// เปิด index.html ใน browser

async function loadPosts() {
 const list = document.getElementById("posts");
 const status = document.getElementById("status");
 status.textContent = "Loading...";
 list.innerHTML = "";

 try {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const posts = await res.json();

  status.textContent = `Loaded ${posts.length} posts`;
  posts.map((p) => ({ id: p.id, title: p.title })).forEach((p) => {
   const li = document.createElement("li");
   li.textContent = `#${p.id} ${p.title}`;
   list.appendChild(li);
  });
 } catch (err) {
  status.textContent = `Failed: ${err.message}`;
 }
}

document.getElementById("reload").addEventListener("click", loadPosts);
loadPosts();
