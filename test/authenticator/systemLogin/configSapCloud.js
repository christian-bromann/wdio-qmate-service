var path = require("path");
var merge = require("deepmerge");
const plainConfig = require("../../helper/configurations/chrome.headless.conf.js");
exports.config = merge(plainConfig.config, {
  maxInstances: 1,
  bail: 1,

  specs: [
    path.resolve(__dirname, "specs/sapCloud.spec.js")
  ],
  exclude: [],

  reporters: ["spec"],

  params: {
    auth: {
      formType: "sapcloud-form",
      username: "PURCHASER",
      password: "Welcome1!"
    }
  },
  
  baseUrl: "https://hbr-715.wdf.sap.corp/ui"
});