const path = require("path");
const qmateProfiles = require("qmate-profiles");
const profile = qmateProfiles.reportHeadless;

exports.config = qmateProfiles.merge(profile, {
  maxInstances: 6,
  specFileRetries: 2,
  bail: 1,
  baseUrl: "https://sapui5.hana.ondemand.com/1.99.0/test-resources/sap/m/demokit/cart/webapp/index.html",

  specs: [
    path.resolve(__dirname, "expectToBeVisible.spec.js"),
    path.resolve(__dirname, "expectValueToBe.spec.js"),
    path.resolve(__dirname, "expectToBeNotVisible.spec.js"),
    path.resolve(__dirname, "expectAttributeToBe.spec.js"),
    path.resolve(__dirname, "expectAttributeToContain.spec.js")
  ],

  exclude: [],

  services: [
    ["chromedriver", {
      port: 4444
    }],
    ["static-server", {
      port: 34005,
      folders: [{
        mount: "/waitForElements.html",
        path: path.resolve(__dirname, "../../../helper/website/waitForElements.html")
      },
      {
        mount: "/buttons.html",
        path: path.resolve(__dirname, "../../../helper/website/buttons.html")
      },
      {
        mount: "/checkBox.html",
        path: path.resolve(__dirname, "../../../helper/website/checkBox.html")
      },
      {
        mount: "/dropdown.html",
        path: path.resolve(__dirname, "../../../helper/website/dropdown.html")
      },
      {
        mount: "/forms.html",
        path: path.resolve(__dirname, "../../../helper/website/forms.html")
      },
      {
        mount: "/scrollPage.html",
        path: path.resolve(__dirname, "../../../helper/website/scrollPage.html")
      },
      {
        mount: "/hiddenAndVisible.html",
        path: path.resolve(__dirname, "../../../helper/website/hiddenAndVisible.html")
      },
      {
        mount: "/tables.html",
        path: path.resolve(__dirname, "../../../helper/website/tables.html")
      }
      ]
    }]
  ]
});