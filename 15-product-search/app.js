const grid = document.getElementById("grid");
const search = document.getElementById("search");
const category = document.getElementById("category");
const status = document.getElementById("status");
let products = [];

async function load() {
  status.textContent = "Loading...";
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    products = await res.json();
    const cats = [...new Set(products.map((p) => p.category))];
    cats.forEach((c) => {
      const o = document.createElement("option");
      o.value = c;
      o.textContent = c;
      category.appendChild(o);
    });
    render();
  } catch (err) {
    status.textContent = `Failed: ${err.message}`;
  }
}

function render() {
  const q = search.value.toLowerCase();
  const shown = products.filter(
    (p) =>
      p.title.toLowerCase().includes(q) &&
      (!category.value || p.category === category.value)
  );
  status.textContent = `${shown.length} items`;
  grid.innerHTML = "";
  shown.forEach((p) => {
    const li = document.createElement("li");
    li.textContent = `${p.title.slice(0, 40)} — $${p.price}`;
    grid.appendChild(li);
  });
}

search.addEventListener("input", render);
category.addEventListener("change", render);
load();
