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

test("Stagehand Workshop Challenge", async () => {
  const stagehand = new Stagehand({
    env: "LOCAL",
    model: "ollama/deepseek-v3.1:671b-cloud", // provider/model - Example: openia/gpt-5
    actTimeoutMs: 2000 * 60, // 2 minute
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
    console.log('First Product', firstProduct);

    await stagehand.act("Click on the first product");
    const currentProduct = await stagehand.extract(
      'Get product information',
      productSchema.default(notFoundProduct),
    );
    console.log('First Product', currentProduct);

    assert.deepEqual(firstProduct, currentProduct);

    await stagehand.act('Click on "Add to Cart" Button');
    await stagehand.act('Click on "Cart" Button');

    const productsInCart = await stagehand.extract(
      "Get subtotal items, example: 'Subtotal (1 item)'",
      z.object({ count: z.number().default(0) }),
    );
    console.log('Cart Count', productsInCart);

    assert.equal(productsInCart.count, 1);

    const cartProduct = await stagehand.extract(
      "Get information of the product in cart",
      productSchema.default(notFoundProduct),
    );
    console.log('Product In Cart:', cartProduct);

    assert.equal(cartProduct.name, firstProduct.name);
  } finally {
    await stagehand.close();
  }
});
