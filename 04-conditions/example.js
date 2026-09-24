// 04 - conditions
const score = 75;

if (score >= 80) {
 console.log("A");
} else if (score >= 60) {
 console.log("Pass");
} else {
 console.log("Fail");
}

// โน้ต: ternary สำหรับ assign สั้นๆ
const status = score >= 60 ? "pass" : "fail";
console.log(status);

// โน้ต: switch เหมาะกับค่าตายตัวหลายค่า
const day = "mon";
switch (day) {
 case "sat":
 case "sun":
  console.log("weekend");
  break;
 default:
  console.log("weekday");
}
