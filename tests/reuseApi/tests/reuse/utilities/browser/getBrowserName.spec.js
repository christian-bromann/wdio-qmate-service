"use strict";

describe("browser - getBrowserName", function () {

  let browserName;

  it("Execution", async function () {
    await browser.navigateTo(browser.config.baseUrl);
    browserName = await utilities.browser.getBrowserName();
  });

  it("Verification", async function () {
    const valueAct = browserName;
    const valueExp = "chrome";
    await ui5.common.assertion.expectEqual(valueAct, valueExp);
  });

});