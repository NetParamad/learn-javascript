const input = document.getElementById("input");
const list = document.getElementById("list");
const count = document.getElementById("count");
let filter = "all";

let todos = loadTodos();

function loadTodos() {
  try {
    const raw = localStorage.getItem("todos");
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    console.warn("todos ใน localStorage เสีย ล้างแล้วเริ่มใหม่");
    localStorage.removeItem("todos");
    return [];
  }
}

function save() {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (err) {
    console.warn("save failed:", err);
  }
}

function render() {
  list.innerHTML = "";
  const shown = todos.filter((t) =>
    filter === "all" ? true : filter === "active" ? !t.done : t.done
  );
  shown.forEach((t) => {
    const li = document.createElement("li");
    const box = document.createElement("input");
    box.type = "checkbox";
    box.checked = t.done;
    box.addEventListener("change", () => {
      t.done = box.checked;
      save();
      render();
    });
    const span = document.createElement("span");
    span.textContent = t.text;
    if (t.done) span.style.textDecoration = "line-through";
    const del = document.createElement("button");
    del.textContent = "x";
    del.addEventListener("click", () => {
      todos = todos.filter((x) => x.id !== t.id);
      save();
      render();
    });
    li.append(box, span, del);
    list.appendChild(li);
  });
  count.textContent = `${todos.filter((t) => !t.done).length} left`;
}

function addTodo() {
  const text = input.value.trim();
  if (!text) return;
  todos.push({ id: Date.now(), text, done: false });
  input.value = "";
  save();
  render();
}

document.getElementById("add").addEventListener("click", addTodo);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTodo();
});
document.querySelectorAll("[data-filter]").forEach((b) =>
  b.addEventListener("click", () => {
    filter = b.dataset.filter;
    render();
  })
);

render();
