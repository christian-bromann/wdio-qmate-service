"use strict";

describe("locator - getBindingValue 'text'", function () {
  let bindingValue;

  it("Preparation", async function () {
    await browser.url("#/categories");
  });

  it("Execution", async function () {
    const selector = {
      "elementProperties": {
        "viewName": "sap.ui.demo.cart.view.Home",
        "metadata": "sap.m.StandardListItem",
        "bindingContextPath": "/ProductCategories*'LT')"
      }
    };
    const attribute = "title";
    bindingValue = await ui5.common.locator.getBindingValue(selector, attribute);
  });

  it("Verification", function () {
    ui5.common.assertion.expectEqual(bindingValue, "Laptops");
  });

});

describe("locator - getBindingValue for wrong attribute", function () {
  it("Preparation", async function () {
    await browser.url("#/categories");
  });

  it("Execution and Verification", async function () {
    const selector = {
      "elementProperties": {
        "viewName": "sap.ui.demo.cart.view.Home",
        "metadata": "sap.m.StandardListItem",
        "bindingContextPath": "/ProductCategories*'LT')"
      }
    };
    const attribute = "case";

    await expect(ui5.common.locator.getBindingValue(selector, attribute))
      .rejects.toThrow(/Cannot read property 'getValue' of undefined/);
  });
});

describe("locator - getBindingValue for wrong selector", function () {
  it("Preparation", async function () {
    await browser.url("#/categories");
  });

  it("Execution and Verification", async function () {
    const selector = {
      "elementProperties": {
        "viewName": "sapfiori.cart.view.Home", // "sapfiori.cart.view.Home" instead of "sap.ui.demo.cart.view.Home"
        "metadata": "sap.StandartListItem",
        "bindingContextPath": "/ProductCategories*'LT')"
      }
    };
    const attribute = "title";
    await expect(ui5.common.locator.getBindingValue(selector, attribute))
      .rejects.toThrow(/uiControlExecuteLocator\(\): No visible elements found/);
  });
});