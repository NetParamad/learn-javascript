[EN](README.md) | [TH](README.th.md)

<h1 align="center">Learn JavaScript</h1>

<p align="center">
  รีโปทบทวน JavaScript แบบลงมือทำ: 17 บทเรียนมีเลขกำกับ พร้อมตัวอย่างที่รันได้และไม่มีขั้นตอน build
</p>

<p align="center">
  <a href="#ภาพรวม">ภาพรวม</a> ·
  <a href="#ฟีเจอร์">ฟีเจอร์</a> ·
  <a href="#เทคโนโลยีที่ใช้">เทคโนโลยี</a> ·
  <a href="#โครงสร้างโปรเจกต์">โครงสร้าง</a> ·
  <a href="#บทเรียน">บทเรียน</a> ·
  <a href="#เริ่มต้นใช้งาน">เริ่มต้นใช้งาน</a> ·
  <a href="#ตัวแปรสภาพแวดล้อม">ตัวแปรสภาพแวดล้อม</a> ·
  <a href="#วิธีใช้งาน">วิธีใช้งาน</a> ·
  <a href="#หมายเหตุ">หมายเหตุ</a>
</p>

---

## ภาพรวม

รีโปนี้จัดเส้นทางการเรียน JavaScript ตั้งแต่พื้นฐานภาษาไปจนถึง API ฝั่งเบราว์เซอร์ แต่ละหัวข้ออยู่ในโฟลเดอร์ของตัวเอง (`01-` ถึง `17-`) และทุกโฟลเดอร์มีตัวอย่างเล็กๆ ที่รันได้ทันที ไม่ต้องมี build step ไม่ต้องมี bundler และไม่มี dependency ใดๆ

เก้าบทแรกเป็นสคริปต์ Node.js ล้วน (`example.js`) เน้นพื้นฐานภาษา ส่วนบทที่ 10, 11 และ 13–17 ย้ายเข้าเบราว์เซอร์ (`index.html` + `app.js`) ครอบคลุม DOM, event, `fetch` และแอปเล็กๆ สี่ตัว ส่วนบท `12-fetch-api` ยังเป็นสคริปต์ Node เพราะสอน `fetch` นอกบริบทของ DOM

เป้าหมายหลักของครึ่งหลังมีอยู่เรื่องเดียว คือ **ดึงข้อมูลด้วย fetch แล้วแสดงผลบนหน้าเว็บ** ไล่จากตัวอย่างที่เล็กที่สุด (`13-mini-project-fetch-display`) ไปจนถึงมินิโปรเจกต์เต็มรูปแบบ

## ฟีเจอร์

- **17 บทเรียนมีเลขกำกับ** — หนึ่งโฟลเดอร์ต่อหนึ่งหัวข้อ ตั้งแต่ตัวแปรและชนิดข้อมูลไปจนถึง GitHub API
- **รันได้สองแบบ** — สคริปต์ Node (`example.js`) สำหรับพื้นฐานภาษา และหน้าเว็บ (`index.html` + `app.js`) สำหรับงาน DOM กับ API
- **เน้น fetch แล้วแสดงผล** — บทที่ 13 คือตัวอย่างขั้นต่ำ ส่วนบทที่ 14–17 เป็นมินิแอปเต็มที่สร้างบนรูปแบบเดียวกัน
- **มินิแอปสี่ตัว** — รายการ Todo ที่เก็บใน `localStorage`, ค้นหาสินค้า, ดูสภาพอากาศ และดูโปรไฟล์ GitHub
- **ไม่มี dependency เลย** — ไม่มี `package.json`, เฟรมเวิร์ก, ไลบรารี, CDN หรือ bundler แค่รันไฟล์ได้ทันที
- **โน้ตบทเรียนสองภาษา** — ทุกโฟลเดอร์มี `README.md` ของตัวเอง พร้อมโน้ตสั้นๆ ไทย/อังกฤษและคำสั่งรัน
- **Public API ที่ไม่ต้องใช้คีย์** — JSONPlaceholder, FakeStore API, Open-Meteo และ GitHub REST API
- **เห็น error ชัดเจน** — ตัวอย่างที่ต่อ API ทุกตัวเช็ค `res.ok` และแสดงความล้มเหลวในบรรทัด status

## เทคโนโลยีที่ใช้

| ด้าน | ที่เลือกใช้ |
| --- | --- |
| ภาษา | JavaScript (ES2020+) ไม่ใช้เฟรมเวิร์กและไม่ใช้ TypeScript |
| Runtime ฝั่ง Node | Node.js 18+ — สำหรับบทที่ใช้ `example.js` โดย `12-fetch-api` ต้องใช้ `fetch` แบบ native |
| เบราว์เซอร์ | Vanilla DOM — `index.html` + `app.js` ธรรมดา ไม่มีไลบรารีหรือ CDN |
| แหล่งข้อมูล | JSONPlaceholder, FakeStore API, Open-Meteo (geocoding + forecast), GitHub REST API |
| การเก็บข้อมูล | `localStorage` — แอป Todo เก็บรายการไว้ใต้คีย์ `todos` |
| เครื่องมือ | ไม่มี — ไม่มีตัวจัดการแพ็กเกจ, dependency, เทสต์ หรือขั้นตอน build |

## โครงสร้างโปรเจกต์

```
learn-javascript/
├── 01-variables/                   # example.js + README.md
├── 02-data-types/
├── 03-operators/
├── 04-conditions/
├── 05-loops/
├── 06-functions/
├── 07-arrays/
├── 08-objects/
├── 09-array-methods/
├── 10-dom-basics/                  # index.html + app.js + README.md
├── 11-events/
├── 12-fetch-api/                   # example.js + README.md (Node)
├── 13-mini-project-fetch-display/  # index.html + app.js + README.md
├── 14-todo-app/
├── 15-product-search/
├── 16-weather-app/
├── 17-github-profile-viewer/
├── .gitattributes
├── .gitignore
├── README.md                       # English documentation (this file)
└── README.th.md                    # Thai documentation
```

คอนเวนชันที่ใช้ทั้งรีโป:

- **`example.js`** → รันด้วย Node (`node example.js`)
- **`app.js` + `index.html`** → เปิด `index.html` ในเบราว์เซอร์

## บทเรียน

### Part 1 — พื้นฐานภาษา (รันด้วย Node)

| # | โฟลเดอร์ | หัวข้อ | คอนเซปต์สำคัญ |
|---|----------|--------|----------------|
| 01 | `01-variables` | ตัวแปร | `let` (แก้ค่าได้) vs `const` (assign ใหม่ไม่ได้), เลี่ยง `var` |
| 02 | `02-data-types` | ชนิดข้อมูล | primitive vs object, `typeof null === "object"`, `Array.isArray` |
| 03 | `03-operators` | ตัวดำเนินการ | เทียบแบบเข้ม `===`, `??` สำหรับ null/undefined, `?.` กันพัง |
| 04 | `04-conditions` | เงื่อนไข | `if/else`, ternary `? :`, `switch` สำหรับค่าตายตัว |
| 05 | `05-loops` | ลูป | `for...of` วนค่าของ array, `for...in` วนคีย์ของ object, `while` |
| 06 | `06-functions` | ฟังก์ชัน | `function` vs arrow `=>`, default param, arrow ไม่มี `this` ของตัวเอง |
| 07 | `07-arrays` | อาร์เรย์ | `push`, `.length`, `.at(-1)`, คัดลอกด้วย `[...arr]` |
| 08 | `08-objects` | ออบเจกต์ | เข้าถึง property, destructuring `{ }`, spread `{...}`, `Object.keys/values` |
| 09 | `09-array-methods` | เมธอดของ array | `map` (แปลง), `filter` (กรอง), `find` (ตัวแรกที่เจอ), `reduce` (รวมยอด) |

### Part 2 — เบราว์เซอร์และ API

| # | โฟลเดอร์ | หัวข้อ | คอนเซปต์สำคัญ |
|---|----------|--------|----------------|
| 10 | `10-dom-basics` | พื้นฐาน DOM | `getElementById`, `textContent`, `createElement` + `appendChild` |
| 11 | `11-events` | อีเวนต์ | `addEventListener("click")`, event `input`, `e.target.value` |
| 12 | `12-fetch-api` | Fetch API | เช็ค `res.ok`, `await res.json()`, ครอบ `try/catch` (Node 18+) |
| 13 | `13-mini-project-fetch-display` | ดึงข้อมูล + แสดงผล | `fetch` + `res.ok` + `map` + `createElement` (โหลด 5 โพสต์) |
| 14 | `14-todo-app` | แอป Todo | CRUD + `localStorage`, `JSON.parse/stringify`, กรอง All/Active/Done |
| 15 | `15-product-search` | ค้นหาสินค้า | FakeStore API, ค้นหา + กรองหมวด, `filter` + `includes`, `Set` |
| 16 | `16-weather-app` | แอปอากาศ | `fetch` 2 ต่อ, Open-Meteo geocoding, `encodeURIComponent`, `?.` |
| 17 | `17-github-profile-viewer` | ดูโปรไฟล์ GitHub | `fetch` 2 ต่อ, เช็ค `res.ok` + จัดการ 404, repo ล่าสุด 5 ตัว |

## เริ่มต้นใช้งาน

สิ่งที่ต้องมี:

- **Node.js 18 ขึ้นไป** — สำหรับบทที่ใช้ `example.js` ซึ่ง `12-fetch-api` ใช้ `fetch` แบบ native
- **เบราว์เซอร์รุ่นใหม่** — สำหรับบทที่ 10, 11 และ 13–17
- **อินเทอร์เน็ต** — สำหรับบทที่ต่อ API (12, 13, 15, 16, 17)

ไม่มีอะไรต้องติดตั้งเลย เพราะไม่มี dependency และไม่มี build step แค่ clone รีโปมาก็ใช้ได้

```bash
git clone https://github.com/NetParamad/learn-javascript.git
cd learn-javascript
```

## ตัวแปรสภาพแวดล้อม

ไม่มี รีโปนี้ไม่ใช้ไฟล์ `.env`, API key, secret หรือตัวแปรสภาพแวดล้อมใดๆ — API ที่เรียกทั้งหมดเป็น public และไม่ต้องใช้คีย์

## วิธีใช้งาน

### รันบทพื้นฐานภาษา (Node)

```bash
cd 01-variables
node example.js
```

ใช้กับโฟลเดอร์ `01` ถึง `09` และรวมถึง `12-fetch-api` ด้วย

### รันบทฝั่งเบราว์เซอร์

เปิดไฟล์ `index.html` ของโฟลเดอร์นั้นในเบราว์เซอร์ (ดับเบิลคลิกไฟล์ได้เลย)

```bash
cd 14-todo-app
open index.html        # macOS; or double-click the file
```

ใช้กับ `10-dom-basics`, `11-events` และ `13` ถึง `17` สำหรับแอปที่ต่อ API แค่เปิดหน้าเว็บแล้วใช้งานผ่าน UI ได้เลย

- `13-mini-project-fetch-display` — โหลด 5 โพสต์ทันทีที่เปิดหน้า กด **Reload** เพื่อดึงใหม่
- `14-todo-app` — เพิ่มงานด้วยช่องกรอกหรือ Enter ติ๊กเสร็จ ลบด้วย **x** และกรอง All/Active/Done ข้อมูลอยู่ต่อใน `localStorage`
- `15-product-search` — พิมพ์ช่องค้นหา แล้วเลือกหมวดเพื่อกรองสินค้า
- `16-weather-app` — พิมพ์ชื่อเมือง (ค่าเริ่มต้น Bangkok) แล้วกด **Check** เพื่อดูอุณหภูมิและรหัสสภาพอากาศปัจจุบัน
- `17-github-profile-viewer` — พิมพ์ username ของ GitHub (ค่าเริ่มต้น `NetParamad`) เพื่อดู followers จำนวน public repo และ repo 5 ตัวที่อัปเดตล่าสุด

## หมายเหตุ

- ทุกโฟลเดอร์บทเรียนมี `README.md` ของตัวเอง พร้อมโน้ตสั้นๆ สองภาษาและคำสั่งรัน
- `15-product-search` ใช้ FakeStore API ซึ่งล่มบ่อย ถ้าโหลดไม่ขึ้นให้ลองใหม่ภายหลัง (โค้ดจะโชว์ error ผ่านบรรทัด status)
- `16-weather-app` ใช้ Open-Meteo จึงไม่ต้องใช้ API key
- บทที่ต่อ API จะขึ้นกับ rate limit และความพร้อมใช้งานของ public API นั้นๆ
- **สัญญาอนุญาต** — MIT (ดู [LICENSE](LICENSE))
