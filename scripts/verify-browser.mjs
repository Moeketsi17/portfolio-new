import { chromium } from "@playwright/test";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1440, height: 1100 },
  deviceScaleFactor: 1,
});

const consoleMessages = [];
const pageErrors = [];

page.on("console", (message) => {
  if (["error", "warning"].includes(message.type())) {
    consoleMessages.push(`${message.type()}: ${message.text()}`);
  }
});

page.on("pageerror", (error) => {
  pageErrors.push(error.message);
});

await page.goto("http://localhost:3000", {
  waitUntil: "networkidle",
  timeout: 30_000,
});

const initial = await page.evaluate(() => {
  const slash = document.querySelector("[data-hero-slash]");
  const front = [...document.querySelectorAll("span")].find(
    (element) => element.textContent?.trim() === "Front-End",
  );
  const web = [...document.querySelectorAll("span")].find(
    (element) => element.textContent?.trim() === "Web",
  );

  return {
    textLength: document.body.innerText.trim().length,
    hasHeroWords:
      /FRONT\s+END/i.test(document.body.innerText) &&
      /DEVELOPER/i.test(document.body.innerText),
    hasOverlay: Boolean(
      document.querySelector(
        "[data-nextjs-dialog], .vite-error-overlay, #webpack-dev-server-client-overlay",
      ),
    ),
    slashWidth: slash ? getComputedStyle(slash).width : null,
    slashTransform: slash ? getComputedStyle(slash).transform : null,
    frontTransform: front ? getComputedStyle(front).transform : null,
    webTransform: web ? getComputedStyle(web).transform : null,
  };
});

await page.screenshot({ path: "verification-home.png", fullPage: false });
await page.mouse.wheel(0, 850);
await page.waitForTimeout(900);

const afterScroll = await page.evaluate(() => {
  const slash = document.querySelector("[data-hero-slash]");
  const front = [...document.querySelectorAll("span")].find(
    (element) => element.textContent?.trim() === "Front-End",
  );
  const web = [...document.querySelectorAll("span")].find(
    (element) => element.textContent?.trim() === "Web",
  );

  return {
    scrollY: window.scrollY,
    slashWidth: slash ? getComputedStyle(slash).width : null,
    slashTransform: slash ? getComputedStyle(slash).transform : null,
    frontTransform: front ? getComputedStyle(front).transform : null,
    webTransform: web ? getComputedStyle(web).transform : null,
  };
});

const mobilePage = await browser.newPage({
  viewport: { width: 390, height: 844 },
  isMobile: true,
});

await mobilePage.goto("http://localhost:3000", {
  waitUntil: "networkidle",
  timeout: 30_000,
});

await mobilePage.screenshot({ path: "verification-mobile.png", fullPage: false });

const mobile = await mobilePage.evaluate(() => ({
  textLength: document.body.innerText.trim().length,
  hasHeroWords:
    /FRONT\s+END/i.test(document.body.innerText) &&
    /DEVELOPER/i.test(document.body.innerText),
  hasOverlay: Boolean(
    document.querySelector(
      "[data-nextjs-dialog], .vite-error-overlay, #webpack-dev-server-client-overlay",
    ),
  ),
  bodyWidth: document.body.scrollWidth,
  viewportWidth: window.innerWidth,
}));

const logos = await page.evaluate(() => ({
  loadedImages: [...document.querySelectorAll(".marquee__logo")].filter(
    (image) => image instanceof HTMLImageElement && image.naturalWidth > 0,
  ).length,
  textFallbacks: document.querySelectorAll(".marquee__fallback").length,
  totalItems: document.querySelectorAll(".marquee__item").length,
}));

await browser.close();

console.log(
  JSON.stringify(
    {
      initial,
      afterScroll,
      mobile,
      logos,
      consoleMessages,
      pageErrors,
    },
    null,
    2,
  ),
);
