import { chromium } from "playwright";

const browser = await chromium.launch({ args: ["--font-render-hinting=none"] });
const jobs = [
  ["osen.html", "/workspace/artifacts/Kolatour_Osen_4.pdf"],
  ["ng.html", "/workspace/artifacts/Kolatour_NG_4.pdf"],
];

for (const [file, out] of jobs) {
  const page = await browser.newPage();
  await page.goto(`file:///workspace/print/${file}`, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: out,
    printBackground: true,
    preferCSSPageSize: true,
  });
  await page.close();
  console.log("wrote", out);
}

await browser.close();
