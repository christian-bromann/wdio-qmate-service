"use strict";
let elements;

describe("element - getAllDisplayed by selector", function () {
  it("Preparation", async function () {
    await browser.url("#/categories");
  });

  it("Execution", async function () {
    const selector = {
      "elementProperties": {
        "viewName": "sap.ui.demo.cart.view.Home",
        "metadata": "sap.m.StandardListItem"
      }
    };
    elements = await ui5.element.getAllDisplayed(selector);
  });

  it("Verification", async function () {
    common.assertion.expectDefined(elements);
    common.assertion.expectDefined(elements.length);
  });
});

describe("element - getAllDisplayed by wrong selector (unhappy case)", function () {
  it("Preparation", async function () {
    await browser.url("#/categories");
  });

  it("Execution and Verification", async function () {
    const selector = {
      "elementProperties": {
        "viewName": "sapfiori.ui.demo.cart.view.Home", // "sapfiori.ui.demo.cart.view.Home" instead of  "sap.ui.demo.cart.view.Home"
        "metadata": "sap.m.StandardListItem"
      }
    };
    await expect(ui5.element.getAllDisplayed(selector))
      .rejects.toThrow(/uiControlExecuteLocator\(\): No visible elements found/);
  });
});

describe("element - getAllDisplayed by selector for invisible elements (unhappy case)", function () {
  it("Preparation", async function () {
    await browser.url("#/categories");
  });

  it("Execution and Verification", async function () {
    const selectorForInvisibleElements = {
      "elementProperties": {
        "metadata": "sap.ui.core.InvisibleText"
      }
    };
    await expect(ui5.element.getAllDisplayed(selectorForInvisibleElements))
      .rejects.toThrow(/uiControlExecuteLocator\(\): No visible elements found/); // inner browser.uiControls() retrieves only displayed in a viewport elements
  });
});

describe("element - getAllDisplayed should get displayed elements by empty selector (strange case)", function () {
  it("Preparation", async function () {
    await browser.url("#/categories");
  });

  it("Execution", async function () {
    // In case of "elementProperties": {} - browser.uiControls() retieves all ui5 elements
    const selector = {
      "elementProperties": {}
    };
    elements = await ui5.element.getAllDisplayed(selector);
  });

  it("Verification", function () {
    common.assertion.expectDefined(elements);
    common.assertion.expectDefined(elements.length);
  });
});