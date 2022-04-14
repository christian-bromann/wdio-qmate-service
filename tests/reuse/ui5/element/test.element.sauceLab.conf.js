const path = require("path");
const merge = require("deepmerge");
const qmateConfiguration = require("../../../helper/configurations/sauce.labs.conf");

exports.config = merge(qmateConfiguration.config, {
  user: "sso-sap-C5264545",
  key: "bf563257-1589-44c5-96b9-d496a3f5b002",
  region: "eu-central-1",

  maxInstances: 5, // note: for the SAP account, only 5 parallel instances is a max value

  bail: 1,
  baseUrl: "https://sapui5.hana.ondemand.com/1.99.0/test-resources/sap/m/demokit/cart/webapp/index.html",

  specs: [
    path.resolve(__dirname, "getBindingValue.spec.js"),
    path.resolve(__dirname, "getDisplayed.spec.js"),
    path.resolve(__dirname, "getAllDisplayed.spec.js"),
    path.resolve(__dirname, "getByText.spec.js"),
    path.resolve(__dirname, "getId.spec.js"),
    path.resolve(__dirname, "getPropertyValue.spec.js"),
    path.resolve(__dirname, "highlight.spec.js"),
    path.resolve(__dirname, "isVisible.spec.js")
  ],

  exclude: [],


  mochaOpts: {
    timeout: 2000000,
  },
});