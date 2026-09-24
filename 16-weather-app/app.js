const city = document.getElementById("city");
const status = document.getElementById("status");
const result = document.getElementById("result");

async function check() {
  status.textContent = "Loading...";
  result.textContent = "";
  try {
    const g = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city.value)}&count=1`
    );
    const gj = await g.json();
    if (!gj.results?.length) throw new Error("City not found");
    const { latitude, longitude, name, country } = gj.results[0];
    const w = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`
    );
    if (!w.ok) throw new Error(`HTTP ${w.status}`);
    const wj = await w.json();
    status.textContent = `${name}, ${country}`;
    result.textContent = `${wj.current.temperature_2m}°C (code ${wj.current.weather_code})`;
  } catch (err) {
    status.textContent = `Failed: ${err.message}`;
  }
}

document.getElementById("go").addEventListener("click", check);
city.addEventListener("keydown", (e) => {
  if (e.key === "Enter") check();
});
check();
