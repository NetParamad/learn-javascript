const input = document.getElementById("user");
const status = document.getElementById("status");
const profile = document.getElementById("profile");
const repos = document.getElementById("repos");

async function view() {
  const name = input.value.trim();
  if (!name) return;
  status.textContent = "Loading...";
  profile.innerHTML = "";
  repos.innerHTML = "";
  try {
    const res = await fetch(`https://api.github.com/users/${name}`);
    if (!res.ok) throw new Error(res.status === 404 ? "User not found" : `HTTP ${res.status}`);
    const u = await res.json();
    profile.textContent = `${u.login} — ${u.followers} followers, ${u.public_repos} repos`;

    const rr = await fetch(u.repos_url + "?per_page=5&sort=updated");
    const list = await rr.json();
    list
      .map((r) => ({ name: r.name, stars: r.stargazers_count }))
      .forEach((r) => {
        const li = document.createElement("li");
        li.textContent = `${r.name} ★ ${r.stars}`;
        repos.appendChild(li);
      });
    status.textContent = "Done";
  } catch (err) {
    status.textContent = `Failed: ${err.message}`;
  }
}

document.getElementById("go").addEventListener("click", view);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") view();
});
view();
