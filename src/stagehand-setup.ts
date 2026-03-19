import dotenv from "dotenv";

dotenv.config();

import { test } from "node:test";

import { Stagehand } from "@browserbasehq/stagehand";

test("Testing Stagehand Scope", async () => {
  const stagehand = new Stagehand({
    env: "LOCAL",
    model: "" // provider/model - Example: openia/gpt-5
  });

  await stagehand.init();

  const [page] = stagehand.context.pages();
  await page.goto("https://the-internet.herokuapp.com/login");

  await page.waitForSelector('#username');


  await page.act({
    action: "Type %username% in the Username field",
    variables: {
      username: "tomsmith"
       },
  });

  await page.act("Type SuperSecretPassword! in the password field");

  // Use observe() to plan an action before doing it
  const [action] = await page.observe(
    "Click in the Log In button",
  );
  await page.waitForTimeout(1_000);
  await page.act(action); 
  stagehand.log({
    category: "create-browser-app",
    message: `Metrics`,
    auxiliary: {
      metrics: {
        value: JSON.stringify(stagehand.metrics),
        type: "object",
      },
    },
  });
  await stagehand.close();
});
