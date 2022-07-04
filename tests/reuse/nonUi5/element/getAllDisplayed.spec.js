"use strict";

describe("element - getAllDisplayed - error case", function () {

  it("Preparation", async function() {
    await common.navigation.navigateToUrl("http://localhost:34005/buttons.html");
  });

  it("Execution & Verification", async function() {
    await expect(nonUi5.element.getAllDisplayed("BUTTON[id='invalid']", 4000))
      .rejects.toThrow("Function 'waitForAll' failed");
  });
});

describe("element - getAllDisplayed", function() {
  let displayedElements;

  it("Preparation", async function() {
    await common.navigation.navigateToUrl("http://localhost:34005/buttons.html");
  });

  it("Execution", async function() {
    displayedElements = await nonUi5.element.getAllDisplayed("BUTTON[type='button']", 30000);
  });

  it("Verification", async function() {
    expect(displayedElements.length).toBeTruthy();
    await expect(displayedElements[0]).toBeDisplayedInViewport();
    await expect(displayedElements[0].getProperty("id"))
      .resolves.toEqual("Default");
  });
});

describe("element - getAllDisplayed - invisible element (present in DOM)", function() {
  let displayedElements;

  it("Preparation", async function() {
    await common.navigation.navigateToUrl("http://localhost:34005/hiddenAndVisible.html");
  });

  it("Execution", async function() {
    displayedElements = await nonUi5.element.getAllDisplayed("P[id='hiddenParagraph']");
  });

  it("Verification", async function() {
    expect(displayedElements.length).toBe(0);
  });
});