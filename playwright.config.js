// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  workers: 1,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    // Priority: CLI arg > ENV var > default
    headless: process.env.CI === 'true' || false,
    screenshot: "on",
    video: "on",
    viewport: null,
    args: ['--start-maximized'],
    baseURL: "https://parabank.parasoft.com/parabank/index.htm"
  }
});

