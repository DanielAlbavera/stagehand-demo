import dotenv from "dotenv";

dotenv.config();

import { test } from "node:test";
import assert from "node:assert";

import { Stagehand } from "@browserbasehq/stagehand";

test("Testing Stagehand Scope", async () => {
  const stagehand = new Stagehand({
    env: "LOCAL",
    model: "ollama/deepseek-v3.1:671b-cloud" // provider/model - Example: openia/gpt-5
  });

  await stagehand.init();

  const [page] = stagehand.context.pages();
  await page.goto("https://playwright.dev/");

  await stagehand.act('click on "GET STARTED" button');
  const { extraction } = await stagehand.extract('Get the text inside of the "h1" label');
  assert.strictEqual(extraction, "Installation");

  await stagehand.close();
});
