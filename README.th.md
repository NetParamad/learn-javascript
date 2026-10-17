[English](README.md) | [ไทย](README.th.md)

# Learn JavaScript / เรียน JavaScript

คลังฝึก JavaScript แบบลงมือทำ แยกโฟลเดอร์ตามหัวข้อ พร้อมตัวอย่างสั้นๆ ที่รันได้จริง และมี `README.md` ของตัวเองทุกโฟลเดอร์

## ภาพรวม

รีโปนี้จัดเส้นทางการเรียน JavaScript ตั้งแต่พื้นฐานภาษาไปจนถึง API ฝั่งเบราว์เซอร์ แต่ละหัวข้ออยู่ในโฟลเดอร์ของตัวเอง (`01-` ถึง `17-`) และทุกโฟลเดอร์มีตัวอย่างเล็กๆ ที่รันได้ทันที ไม่ต้องมี build step ไม่ต้องมี bundler และไม่มี dependency ใดๆ

เก้าบทแรกเป็นสคริปต์ Node.js ล้วน (`example.js`) เน้นพื้นฐานภาษา ส่วนบทที่ 10–17 ย้ายเข้าเบราว์เซอร์ (`index.html` + `app.js`) ครอบคลุม DOM, event, `fetch` และแอปเล็กๆ ที่ใช้งานได้จริงอีกสี่ตัว ซึ่งต่อกับ public API หรือบันทึกข้อมูลใน `localStorage`

เป้าหมายหลักของครึ่งหลังมีอยู่เรื่องเดียว คือ **ดึงข้อมูลด้วย fetch แล้วแสดงผลบนหน้าเว็บ** ไล่จากตัวอย่างที่เล็กที่สุด (`13-mini-project-fetch-display`) ไปจนถึงมินิโปรเจกต์เต็มรูปแบบ

## สิ่งที่จะได้เรียน

### Part 1 — พื้นฐานภาษา (รันด้วย Node)

| # | โฟลเดอร์ | หัวข้อ | คอนเซปต์สำคัญ |
|---|----------|--------|----------------|
| 01 | `01-variables` | ตัวแปร | `let` (แก้ค่าได้) vs `const` (assign ใหม่ไม่ได้), เลี่ยง `var` |
| 02 | `02-data-types` | ชนิดข้อมูล | primitive vs object, `typeof null === "object"`, `Array.isArray` |
| 03 | `03-operators` | ตัวดำเนินการ | เทียบแบบเข้ม `===`, `??` สำหรับ null/undefined, `?.` กันพัง |
| 04 | `04-conditions` | เงื่อนไข | `if/else`, ternary `? :`, `switch` สำหรับค่าตายตัว |
| 05 | `05-loops` | ลูป | `for...of` วนค่าของ array, `for...in` วนคีย์ของ object |
| 06 | `06-functions` | ฟังก์ชัน | `function` vs arrow `=>`, default param, arrow ไม่มี `this` ของตัวเอง |
| 07 | `07-arrays` | อาร์เรย์ | `push`, `.length`, `.at(-1)`, คัดลอกด้วย `[...arr]` |
| 08 | `08-objects` | ออบเจกต์ | เข้าถึง property, destructuring `{ }`, spread `{...}`, `Object.keys/values` |
| 09 | `09-array-methods` | เมธอดของ array | `map` (แปลง), `filter` (กรอง), `find` (ตัวแรกที่เจอ), `reduce` (รวมยอด) |

### Part 2 — เบราว์เซอร์และ API (เปิดในเบราว์เซอร์)

| # | โฟลเดอร์ | หัวข้อ | คอนเซปต์สำคัญ |
|---|----------|--------|----------------|
| 10 | `10-dom-basics` | พื้นฐาน DOM | `getElementById`, `textContent`, `createElement` + `appendChild` |
| 11 | `11-events` | อีเวนต์ | `addEventListener("click")`, event `input`, `e.target.value` |
| 12 | `12-fetch-api` | Fetch API | เช็ค `res.ok`, `await res.json()`, ครอบ `try/catch` (รันด้วย Node 18+) |
| 13 | `13-mini-project-fetch-display` | ดึงข้อมูล + แสดงผล | `fetch` + `res.ok` + `map` + `createElement` + `addEventListener` |
| 14 | `14-todo-app` | แอป Todo | CRUD + `localStorage`, `JSON.parse/stringify`, กรอง All/Active/Done |
| 15 | `15-product-search` | ค้นหาสินค้า | ค้นหา + กรองหมวดจาก API จริง, `filter` + `includes`, ตัดหมวดซ้ำด้วย `Set` |
| 16 | `16-weather-app` | แอปอากาศ | `fetch` 2 ต่อ, แปลงชื่อเมืองเป็นพิกัด, `encodeURIComponent`, `?.`, `async/await` + `try/catch` |
| 17 | `17-github-profile-viewer` | ดูโปรไฟล์ GitHub | `fetch` 2 ต่อ, เช็ค `res.ok` + จัดการ 404, `map` ก่อน render |

## เทคโนโลยีที่ใช้

- **JavaScript (ES2020+)** — ไม่ใช้เฟรมเวิร์ก ไม่ใช้ TypeScript
- **Node.js 18+** — จำเป็นเฉพาะบทที่ "รันด้วย Node" เพราะ `12-fetch-api` ใช้ `fetch` แบบ native
- **เบราว์เซอร์ (vanilla DOM)** — บทที่ 10–17 ใช้ HTML ธรรมดา (`index.html`) กับสคริปต์ (`app.js`) ไม่มีไลบรารี ไม่มี CDN
- **Public API** — JSONPlaceholder, FakeStore API, Open-Meteo (geocoding + forecast) และ GitHub REST API
- **`localStorage`** — ใช้ในแอป Todo เพื่อเก็บข้อมูลถาวร

รีโปนี้ไม่มี `package.json` ไม่มี dependency และไม่มี build step

## โครงสร้างโปรเจกต์

```
learn-javascript/
├── 01-variables/                  # example.js + README.md
├── 02-data-types/
├── 03-operators/
├── 04-conditions/
├── 05-loops/
├── 06-functions/
├── 07-arrays/
├── 08-objects/
├── 09-array-methods/
├── 10-dom-basics/                 # index.html + app.js + README.md
├── 11-events/
├── 12-fetch-api/                  # example.js + README.md (Node)
├── 13-mini-project-fetch-display/ # index.html + app.js + README.md
├── 14-todo-app/
├── 15-product-search/
├── 16-weather-app/
├── 17-github-profile-viewer/
├── .gitattributes
├── .gitignore
└── README.md
```

คอนเวนชันที่ใช้ทั้งรีโป:

- **`example.js`** → รันด้วย Node (`node example.js`)
- **`app.js` + `index.html`** → เปิด `index.html` ในเบราว์เซอร์

## เริ่มต้นใช้งาน

### สิ่งที่ต้องมี

- **Node.js 18 ขึ้นไป** (สำหรับบทที่ใช้ `example.js` ซึ่ง `12-fetch-api` ต้องใช้ `fetch` แบบ native)
- **เบราว์เซอร์รุ่นใหม่** (สำหรับบทที่ 10, 11 และ 13–17)
- **อินเทอร์เน็ต** สำหรับบทที่ต่อ API (13, 15, 16, 17)

### ติดตั้ง

ไม่มีอะไรต้องติดตั้งเลย เพราะไม่มี dependency และไม่มี build step แค่ clone รีโปมาก็ใช้ได้

```bash
git clone https://github.com/NetParamad/learn-javascript.git
cd learn-javascript
```

## วิธีใช้งาน

### รันบทพื้นฐานภาษา (Node)

```bash
cd 01-variables
node example.js
```

ใช้กับโฟลเดอร์ `01` ถึง `09` และรวมถึง `12-fetch-api` ด้วย

### รันบทฝั่งเบราว์เซอร์

เปิดไฟล์ `index.html` ของโฟลเดอร์นั้นในเบราว์เซอร์ (ดับเบิลคลิกไฟล์ได้เลย) หรือจะเสิร์ฟผ่านเซิร์ฟเวอร์โลคัลก็ได้

```bash
cd 14-todo-app
open index.html        # macOS; หรือดับเบิลคลิกไฟล์
```

ใช้กับ `10-dom-basics`, `11-events` และ `13` ถึง `17`

สำหรับแอปที่ต่อ API แค่เปิดหน้าเว็บแล้วใช้งานผ่าน UI ได้เลย

- `13-mini-project-fetch-display` — กด **Reload** เพื่อดึงและแสดงรายการโพสต์
- `14-todo-app` — เพิ่ม / ติ๊กเสร็จ / ลบ / กรองงาน โดยข้อมูลอยู่ต่อแม้รีเฟรช เพราะเก็บใน `localStorage`
- `15-product-search` — พิมพ์ช่องค้นหา แล้วเลือกหมวดเพื่อกรองสินค้า
- `16-weather-app` — พิมพ์ชื่อเมืองเพื่อดูอากาศปัจจุบัน
- `17-github-profile-viewer` — พิมพ์ username ของ GitHub เพื่อดู followers จำนวน repo และ repo ล่าสุด

## หมายเหตุ

- ทุกโฟลเดอร์บทเรียนมี `README.md` ของตัวเอง พร้อมโน้ตสั้นๆ สองภาษาและคำสั่งรัน
- `15-product-search` ใช้ FakeStore API ซึ่งล่มบ่อย ถ้าโหลดไม่ขึ้นให้ลองรีเฟรชหรือลองใหม่ภายหลัง (โค้ดจะโชว์ error ผ่านบรรทัด status)
- `16-weather-app` ใช้ Open-Meteo จึงไม่ต้องใช้ API key
- บทที่ต่อ API จะขึ้นกับ rate limit และความพร้อมใช้งานของ public API นั้นๆ
- โปรเจกต์นี้ไม่มีการใช้ secret หรือ environment variable ใดๆ
