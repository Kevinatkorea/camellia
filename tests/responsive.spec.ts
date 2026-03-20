import { test, expect } from "@playwright/test";

// ── Helpers ──────────────────────────────────────────────────

async function assertNoHorizontalOverflow(page: import("@playwright/test").Page) {
  const overflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });
  expect(overflow).toBe(false);
}

// ── Home Page ── / ──────────────────────────────────────────

test.describe("Home /", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
  });

  test("hero renders with heading", async ({ page }) => {
    const heading = page.locator("h1");
    await expect(heading).toBeVisible();
    await expect(heading).toContainText("하루의 온도를 바꾸는");
  });

  test("navigation bar is visible", async ({ page }) => {
    const nav = page.locator("nav").first();
    await expect(nav).toBeVisible();
    await expect(nav).toContainText("SARAJOO");
  });

  test("no horizontal overflow", async ({ page }) => {
    await assertNoHorizontalOverflow(page);
  });

  test("footer renders", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
    await expect(footer).toContainText("SARAJOO");
  });
});

// ── Navigation (mobile-specific) ───────────────────────────

test.describe("Navigation mobile", () => {
  test.describe.configure({ retries: 1 });
  test.skip(({ viewport }) => (viewport?.width ?? 1280) >= 768, "mobile only");

  test("hamburger opens overlay menu", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    // Wait for hydration
    await page.waitForTimeout(2000);
    const hamburger = page.locator('button[aria-label="메뉴 열기"]');
    await hamburger.click({ force: true });

    const dialog = page.locator('[role="dialog"]');
    await expect(dialog).toBeVisible({ timeout: 10000 });
    await expect(dialog).toContainText("Product");
    await expect(dialog).toContainText("Shop");
  });

  test("menu link navigates and closes", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(2000);
    await page.locator('button[aria-label="메뉴 열기"]').click({ force: true });

    const dialog = page.locator('[role="dialog"]');
    await expect(dialog).toBeVisible({ timeout: 10000 });
    await dialog.locator("text=Product").click();
    await page.waitForURL("**/product");
    await expect(page.locator('[role="dialog"]')).not.toBeVisible();
  });
});

// ── Navigation (desktop-specific) ──────────────────────────

test.describe("Navigation desktop", () => {
  test.skip(({ viewport }) => (viewport?.width ?? 1280) < 768, "desktop only");

  test("desktop nav links visible", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    const nav = page.locator("nav").first();
    await expect(nav.locator("text=Product")).toBeVisible();
    await expect(nav.locator("text=Ritual")).toBeVisible();
    await expect(nav.locator("text=Story")).toBeVisible();
    await expect(nav.locator("text=Shop")).toBeVisible();
  });
});

// ── Product Page ── /product ────────────────────────────────

test.describe("Product /product", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/product", { waitUntil: "networkidle" });
  });

  test("hero renders with heading", async ({ page }) => {
    const heading = page.locator("h1");
    await expect(heading).toBeVisible();
    await expect(heading).toContainText("5분이면 달라집니다");
  });

  test("HOT/COOL tab switch works", async ({ page }) => {
    const coolBtn = page.locator("button", { hasText: "COOL" });
    await coolBtn.scrollIntoViewIfNeeded();
    await coolBtn.click();
    await expect(page.locator("text=30분의 청량함")).toBeVisible();

    const hotBtn = page.locator("button", { hasText: "HOT" });
    await hotBtn.click();
    await expect(page.locator("text=15분의 온기")).toBeVisible();
  });

  test("FAQ accordion opens on click", async ({ page }) => {
    // Wait for dynamically loaded FAQ section
    const faqHeading = page.getByText("자주 묻는 질문");
    await faqHeading.scrollIntoViewIfNeeded();
    await expect(faqHeading).toBeVisible({ timeout: 10000 });

    const firstQuestion = page.getByRole("button", { name: "떨어뜨리면 깨지나요?" });
    await firstQuestion.scrollIntoViewIfNeeded();
    await expect(firstQuestion).toBeVisible({ timeout: 10000 });
    await firstQuestion.click();
    await expect(firstQuestion).toHaveAttribute("aria-expanded", "true");
  });

  test("no horizontal overflow", async ({ page }) => {
    await assertNoHorizontalOverflow(page);
  });
});

// ── Ritual Page ── /ritual ──────────────────────────────────

test.describe("Ritual /ritual", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/ritual", { waitUntil: "networkidle" });
  });

  test("page renders", async ({ page }) => {
    await expect(page.locator("main")).toBeVisible();
  });

  test("no horizontal overflow", async ({ page }) => {
    await assertNoHorizontalOverflow(page);
  });
});

// ── Story Page ── /story ────────────────────────────────────

test.describe("Story /story", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/story", { waitUntil: "networkidle" });
  });

  test("hero renders with BODY MIND SOUL", async ({ page }) => {
    await expect(page.getByText("BODY", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("MIND", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("SOUL", { exact: true }).first()).toBeVisible();
  });

  test("no horizontal overflow", async ({ page }) => {
    await assertNoHorizontalOverflow(page);
  });
});
