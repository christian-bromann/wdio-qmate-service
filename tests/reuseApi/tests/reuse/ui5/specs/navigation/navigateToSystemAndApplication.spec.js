"use strict";

describe("navigation - navigateToSystemAndApplication (s4)", function () {
  const system = "qs9-715.wdf.sap.corp";
  const application = "PurchaseOrder-manage";

  it("Execution and Verification", async function () {
    await ui5.common.navigation.navigateToSystemAndApplication(system, "Shell-home", false);
    await ui5.common.session.loginFiori("PURCHASER");

    await ui5.common.navigation.navigateToSystemAndApplication(system, application, true);
  });

  it("Verification", async function () {
    // Note: currentUrl can contain system specific query params
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain(application);
    expect(currentUrl).toContain(system);
  });


  it("Clean Up", async function () {
    // To be sure that we closed all popups and logout button is visible
    await ui5.common.navigation.closePopups();
    await ui5.common.session.logout();
  });
});

describe("navigation - navigateToSystemAndApplication wrong navigation intent type in demo url with/without verification(unhappy case)", function () {
  const system = "qs9-715.wdf.sap.corp";
  const wrongApplication = { strange: "intent" };
  const application = "Shell-home";

  it("Execution and Verification", async function () {
    await ui5.common.navigation.navigateToSystemAndApplication(system, application, false);
    await ui5.common.session.loginFiori("PURCHASER");

    await ui5.common.navigation.navigateToSystemAndApplication(system, wrongApplication, false); // verify = false by default
    const currentUrl = await browser.getUrl();
    // first navigate to 'https://qs9-715.wdf.sap.corp/ui#%5Bobject%20Object%5D'
    // later, in a second, navigate to 'https://qs9-715.wdf.sap.corp/ui#Shell-home'
    // Cannot test the intent inside the url, because it changes too fast in case of wrong intent
    expect(currentUrl).toContain(system); // check you are still at the qs9-715 page

    await expect(ui5.common.navigation.navigateToSystemAndApplication(system, wrongApplication, false, true)) // verify = true
      .rejects.toThrow(/Navigation failed/);
  });
});