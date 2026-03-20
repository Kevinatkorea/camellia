import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: "http://localhost:3099",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "mobile",
      use: { viewport: { width: 375, height: 812 } },
    },
    {
      name: "tablet",
      use: { viewport: { width: 768, height: 1024 } },
    },
    {
      name: "desktop",
      use: { viewport: { width: 1280, height: 900 } },
    },
  ],
  webServer: {
    command: "npm run dev -- --port 3099",
    port: 3099,
    reuseExistingServer: !process.env.CI,
  },
});
