import dotenv from "dotenv";

dotenv.config();

import { test } from "node:test";
import assert from "node:assert";
import { z } from "zod";

import { Stagehand } from "@browserbasehq/stagehand";

const productSchema = z.object({
  name: z.string(),
  price: z.number(),
  rate: z.number(),
});

const notFoundProduct = {
  name: 'Not Found',
  price: 0,
  rate: 0
};

test("Amazon Checkout", async () => {
  const stagehand = new Stagehand({
    env: "LOCAL",
    model: "ollama/glm-4.6:cloud", // provider/model - Example: openia/gpt-5
    localBrowserLaunchOptions: {
      locale: "en-US",
    },
  });

  await stagehand.init();

  try {
    const [page] = stagehand.context.pages();
    await page.goto("https://www.amazon.com/");

    const searchTearm = "smartwatch";
    await stagehand.act(`Fill "${searchTearm}" in searchbar`);
    await stagehand.act('Click on "search" button');
    const firstProduct = await stagehand.extract(
      "Get information of the first product",
      productSchema.default(notFoundProduct),
    );

    await stagehand.act("Click on the first product in the results");
    await stagehand.act('Click on "Add to Cart" Button');
    await stagehand.act('Click on "Cart" Button');

    const cartProduct = await stagehand.extract(
      "Get information of the product in cart",
      productSchema.default(notFoundProduct),
    );

    assert.equal(cartProduct.name, firstProduct.name);
  } finally {
    await stagehand.close();
  }
});
