const path = require("path");
const qmateProfiles = require("qmate-profiles");
const profile = qmateProfiles.chromeHeadless;

exports.config = qmateProfiles.merge(profile, {
  maxInstances: 6,
  bail: 1,
  specs: [
    path.resolve(__dirname, "getProperties.test.js"),
    path.resolve(__dirname, "getAggregations.test.js"),
    path.resolve(__dirname, "getAssociations.test.js"),
    path.resolve(__dirname, "getBindingInfos.test.js")
  ],

  baseUrl: "https://sapui5.hana.ondemand.com/1.99.0/test-resources/sap/m/demokit/cart/webapp/index.html"
});
