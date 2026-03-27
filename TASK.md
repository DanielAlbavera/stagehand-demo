# Workshop Task: Integrating Stagehand into Early Playwright Builds
 
## Steps
 
1. **Navigate to amazon.com**
   - Open your browser and go to [amazon.com](https://www.amazon.com).
 
2. **Search for a Product**
   - Fill the search term (e.g., `smartwatch`) in the searchbar
   - Click the search button.
 
3. **Get product Information**
 - Get the information of the first product
 - Click on the first product
 
4. **Validate Product**
- Get the current product information
- assert that the information is the same as the first product (first vs current)
 
5. **Add product to shopping cart**
  - Add the product to the cart by clicking on it
 
6. **Navigate to shopping cart and validate products**
   - Go to your shopping cart by clicking the cart icon or link.
   - Get the cart product information
   - assert that the cart product is the same as the first product (first product vs cart product)
   - assert that the items in the cart is just one. 