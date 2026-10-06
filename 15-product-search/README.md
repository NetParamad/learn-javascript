# 15 Product Search

## ภาษาไทย
ค้นหา + กรองหมวดจาก API จริง (FakeStore): พิมพ์ช่อง search กรองชื่อ, เลือก category กรองหมวด

โน้ต: `fetch`, `filter` + `includes`, `Set` ตัดหมวดซ้ำ, `input` event

เปิด: `index.html` ใน browser (ต้องมีเน็ต)

> หมายเหตุ: FakeStore API ล่มบ่อย ถ้าโหลดไม่ขึ้นให้รีเฟรชหรือลองใหม่ภายหลัง (โค้ดมีแสดง error ผ่าน status แล้ว)

## English
Search + category filter on a real API (FakeStore): type to filter by name, select category to filter.

Note: `fetch`, `filter` + `includes`, dedupe categories with `Set`, `input` event

Open: `index.html` in a browser (needs internet)

> Note: FakeStore API is flaky — if loading fails, retry later (errors are shown via status).
